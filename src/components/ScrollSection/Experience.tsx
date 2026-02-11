import React, { useRef, useMemo, forwardRef, useEffect } from "react";
import * as THREE from "three";
import { PerspectiveCamera, Environment, shaderMaterial, Html } from "@react-three/drei";
import { useFrame, useThree, extend } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FloatingOrbs } from "./FloatingOrbs";

interface IExperienceProps {
    scrollContainer: React.RefObject<HTMLDivElement>;
}

export default function Experience({ scrollContainer }: IExperienceProps) {
    const { scene, camera, raycaster, viewport } = useThree();
    const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

    // Ref types for Points
    const mainOrbRef = useRef<THREE.Points>(null!);
    const leftOrbRef = useRef<THREE.Points>(null!);
    const rightOrbRef = useRef<THREE.Points>(null!);
    const groupRef = useRef<THREE.Group>(null!);
    const htmlRef = useRef<HTMLDivElement>(null!);

    // Mouse world position for shader
    const mouseWorld = useRef(new THREE.Vector3());
    const mouseScreen = useRef(new THREE.Vector2());

    // Responsive sizing logic (Vertical-First)
    const isMobile = viewport.width < 6;

    // Calculate size based on pixel goal (Increased by ~2% from 550 to 565)
    const targetHeight = 470 / viewport.factor;
    const baseWidth = 4.1;
    const baseHeight = 7.8;
    const aspectRatio = baseWidth / baseHeight;
    const targetWidth = targetHeight * aspectRatio;
    const responsiveX = Math.min(targetWidth, viewport.width * 0.9);
    const responsiveY = targetHeight;

    const initialPositions = {
        main: [0, -4, -3], // Adjusted up for visibility
        left: [-10, 1, 0],
        right: [10, 1, 0]
    };



    useGSAP(() => {
        if (!scrollContainer.current) return;

        const camera = cameraRef.current;
        const mainOrb = mainOrbRef.current;
        const group = groupRef.current;
        const htmlGroup = htmlRef.current;

        if (!camera || !mainOrb || !group) return;

        scene.background = new THREE.Color("#000000");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: scrollContainer.current,
                start: "top top",
                end: "+=4000",
                scrub: true,
            }
        });

        // 0. RESET INITIAL STATES
        tl.set(camera.position, { z: 12, x: 0, y: 0.1 }, 0);
        [mainOrbRef, leftOrbRef, rightOrbRef].forEach((ref, i) => {
            const orb = ref.current;
            if (!orb) return;
            const initialSize = i === 0 ? 0.015 : 0.012;
            const initialOpacity = i === 0 ? 1.0 : 0.7;
            tl.set((orb.material as any).uniforms.uPointSize, { value: initialSize }, 0);
            tl.set((orb.material as any).uniforms.uOpacity, { value: initialOpacity }, 0);
            tl.set(orb.position, {
                x: i === 0 ? initialPositions.main[0] : (i === 1 ? initialPositions.left[0] : initialPositions.right[0]),
                y: i === 0 ? initialPositions.main[1] : (i === 1 ? initialPositions.left[1] : initialPositions.right[1]),
                z: i === 0 ? initialPositions.main[2] : (i === 1 ? initialPositions.left[2] : initialPositions.right[2])
            }, 0);
            tl.set((orb.material as any).uniforms.uMorph, { value: 0 }, 0);
            tl.set((orb.material as any).uniforms.uBorder, { value: 0 }, 0);
        });
        tl.set(group.scale, { x: 1, y: 1, z: 1 }, 0);

        // Hide HTML initially
        if (htmlGroup) {
            tl.set(htmlGroup, { opacity: 0, display: 'none' }, 0);
        }

        // 1. FLY-IN
        tl.to(mainOrb.position, { x: 0, y: -0.2, z: 0, duration: 1, ease: "power2.out" }, 0);
        tl.to(leftOrbRef.current!.position, {
            x: -viewport.width * 0.4,
            y: viewport.height * 0.1,
            z: 2,
            duration: 1.2,
            ease: "power2.out"
        }, 0.1);
        tl.to(rightOrbRef.current!.position, {
            x: viewport.width * 0.4,
            y: viewport.height * 0.1,
            z: -1,
            duration: 1.1,
            ease: "power2.out"
        }, 0.05);

        // 2. THE STRUGGLE
        tl.to([mainOrb.position, leftOrbRef.current!.position, rightOrbRef.current!.position], {
            x: 0, y: 0, z: 0, duration: 1.5, ease: "power3.in"
        }, 1.5);

        tl.to(leftOrbRef.current!.position, { x: -responsiveX * 0.8, y: -responsiveY * 0.2, z: 1, duration: 0.8, ease: "expo.out" }, 3.0);
        tl.to(rightOrbRef.current!.position, { x: responsiveX * 0.8, y: responsiveY * 0.2, z: -1, duration: 0.8, ease: "expo.out" }, 3.1);
        tl.to(mainOrb.position, { y: responsiveY * 0.1, duration: 0.8, ease: "expo.out" }, 3.0);

        tl.to([leftOrbRef.current!.position, rightOrbRef.current!.position], {
            x: 0, y: 0, z: 0, duration: 1, ease: "back.in(2)"
        }, 4.0);

        tl.to(leftOrbRef.current!.position, { x: -responsiveX * 0.4, y: 0.5, z: 0.5, duration: 0.5, ease: "elastic.out(1, 0.3)" }, 5.0);
        tl.to(rightOrbRef.current!.position, { x: responsiveX * 0.4, y: -0.5, z: -0.5, duration: 0.5, ease: "elastic.out(1, 0.3)" }, 5.1);

        tl.to([mainOrb.position, leftOrbRef.current!.position, rightOrbRef.current!.position], {
            x: 0, y: 0, z: 0, duration: 1, ease: "power4.inOut"
        }, 6.0);

        // 3. STRETCH & MORPH
        tl.to((mainOrb.material as any).uniforms.uMorph, {
            value: 1.0,
            duration: 2,
            ease: "power2.inOut"
        }, 7.5);

        tl.to(group.scale, {
            x: responsiveY,
            y: responsiveY,
            z: 1,
            duration: 2,
            ease: "expo.inOut"
        }, 7.5);

        // 3.5 BORDER TRANSFORMATION (Solidify)
        // Starts only after Morph is fully complete (7.5 + 2 = 9.5)
        tl.to((mainOrb.material as any).uniforms.uBorder, {
            value: 1.0,
            duration: 2.0, // Slower transition to solid frame
            ease: "power2.inOut"
        }, 9.5);

        // Fade in HTML content AFTER border is fully solid (9.5 + 2 = 11.5)
        if (htmlGroup) {
            tl.set(htmlGroup, { display: 'block', pointerEvents: 'none' }, 11.5);
            tl.to(htmlGroup, {
                opacity: 1,
                duration: 1.0,
                ease: "power2.out"
            }, 11.5);

            // Enable interactions only after fully visible
            tl.set(htmlGroup, { pointerEvents: 'auto' }, 12.5);
        }

        // Hide aux orbs
        tl.to([(leftOrbRef.current?.material as any).uniforms.uOpacity, (rightOrbRef.current?.material as any).uniforms.uOpacity], {
            value: 0,
            duration: 1,
            stagger: 0.2
        }, 8.0);

        // 4. CONDENSING
        [mainOrbRef, leftOrbRef, rightOrbRef].forEach((ref, i) => {
            const orb = ref.current;
            if (!orb) return;
            tl.to((orb.material as any).uniforms.uPointSize, {
                value: 0.002,
                duration: 1.5,
                ease: "power2.in"
            }, 10.0 + i * 0.1);

            tl.to((orb.material as any).uniforms.uOpacity, {
                value: 0.3,
                duration: 1.5,
                ease: "power2.inOut"
            }, 10.0);
        });

        // CAMERA MOTION
        const activeCameraZ = isMobile ? 12 : 10;
        tl.to(camera.position, {
            z: activeCameraZ,
            x: isMobile ? 0 : 0.5,
            y: 0.1,
            duration: 4,
            ease: "power3.inOut"
        }, 0);

        tl.to(camera.position, {
            x: 0,
            z: activeCameraZ + 2,
            duration: 6,
            ease: "power2.inOut"
        }, 4.0);

    }, { dependencies: [scrollContainer, viewport.width, viewport.height, cameraRef.current, mainOrbRef.current, groupRef.current] });

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Project mouse to world space
        raycaster.setFromCamera(mouseScreen.current, camera);
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        raycaster.ray.intersectPlane(plane, mouseWorld.current);

        // Update shader uniforms
        [mainOrbRef, leftOrbRef, rightOrbRef].forEach((ref) => {
            if (ref.current?.material) {
                const { uniforms } = ref.current.material as any;
                if (uniforms) {
                    uniforms.uTime.value = time;
                    uniforms.uMouse.value.copy(mouseWorld.current);
                    // Pulsate uWobble for "alive" feel sync'd with Hero
                    uniforms.uWobble.value = Math.sin(time * 2.0) * 0.5 + 0.5;
                }
            }
        });

        // Subtle parallax effect on the group
        const { x, y } = mouseScreen.current;
        if (groupRef.current) {
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1, 0.05);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.05);
        }

        if (cameraRef.current) {
            cameraRef.current.lookAt(0, 0, 0);
        }
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseScreen.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseScreen.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0, 0, 12]}
                fov={45}
            />

            <Environment preset="city" />
            <ambientLight intensity={10} />
            <pointLight position={[10, 10, 10]} intensity={6.5} color="#ff8c42" />

            <group ref={groupRef}>
                <FloatingOrbs
                    mainOrbRef={mainOrbRef}
                    leftOrbRef={leftOrbRef}
                    rightOrbRef={rightOrbRef}
                    aspectRatio={aspectRatio}
                    morph={0} // Controlled by GSAP
                    border={0}
                />

                {/* HTML Overlay: Solid Border & Scrollable Feed */}
                <Html transform center scale={0.070} position={[0, 0, 0]} zIndexRange={[100, 0]}>
                    <div ref={htmlRef} style={{
                        width: '340px',
                        height: '620px',
                        borderRadius: '30px',
                        border: '2px dashed #ff8c42', // THE SOLID BORDER
                        background: 'rgba(4, 3, 3, 0.95)', // Nearly opaque background
                        boxShadow: '0 0 20px rgba(255, 140, 66, 0.6), inset 0 0 20px rgba(255, 140, 66, 0.2)', // Glow
                        padding: '20px',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        opacity: 0, // GSAP controls this
                        fontFamily: 'Inter, sans-serif',
                        overflow: 'hidden', // Contain the scroll
                    }}>


                        {/* Scrollable Feed Content */}
                        <div ref={(node) => {
                            if (node) {
                                const stop = (e: Event) => e.stopPropagation();
                                node.onwheel = stop;
                                node.ontouchmove = stop;
                                node.ontouchstart = stop;
                            }
                        }} style={{
                            flex: 1,
                            height: '100%', // Constraint for flex child
                            minHeight: 0,   // Allow shrinking
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            paddingRight: '4px',
                            pointerEvents: 'auto',
                            touchAction: 'pan-y',
                            overscrollBehavior: 'contain'
                        }} className="no-scrollbar">
                            {/* Feed Item 1 */}
                            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ff8c42' }} />
                                    <div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Design System</div>
                                        <div style={{ fontSize: '0.7rem', color: '#888' }}>Just now</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.85rem', lineHeight: 1.4, color: '#ddd' }}>
                                    Released v2.0 with improved particle physics and haptic feedback integration.
                                </div>
                            </div>

                            {/* Feed Item 2 */}
                            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#44aaff' }} />
                                    <div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>User Experience</div>
                                        <div style={{ fontSize: '0.7rem', color: '#888' }}>2h ago</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.85rem', lineHeight: 1.4, color: '#ddd' }}>
                                    Analyzing scroll depths. Engagement increased by 40% after the new animation update.
                                </div>
                                <div style={{ marginTop: '8px', height: '60px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }} />
                            </div>

                            {/* Feed Item 3 */}
                            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#66ff88' }} />
                                    <div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Performance</div>
                                        <div style={{ fontSize: '0.7rem', color: '#888' }}>5h ago</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.85rem', lineHeight: 1.4, color: '#ddd' }}>
                                    Optimized shader compilation. Frame rate stable at 60fps on mobile devices.
                                </div>
                            </div>

                            {/* Feed Item 4 */}
                            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#44aaff' }} />
                                    <div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>User Experience</div>
                                        <div style={{ fontSize: '0.7rem', color: '#888' }}>2h ago</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.85rem', lineHeight: 1.4, color: '#ddd' }}>
                                    Analyzing scroll depths. Engagement increased by 40% after the new animation update.
                                </div>
                                <div style={{ marginTop: '8px', height: '60px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }} />
                            </div>

                            {/* Feed Item 5 */}
                            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#66ff88' }} />
                                    <div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Performance</div>
                                        <div style={{ fontSize: '0.7rem', color: '#888' }}>5h ago</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.85rem', lineHeight: 1.4, color: '#ddd' }}>
                                    Optimized shader compilation. Frame rate stable at 60fps on mobile devices.
                                </div>
                            </div>
                        </div>
                    </div>
                    <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
                </Html>
            </group>

            {/* Background Glow Plane */}
            < mesh scale={[30, 30, 1]} position={[0, 0, -8]} >
                <planeGeometry />
                <meshBasicMaterial transparent opacity={0.03} color="#ff8c42" />
            </mesh >
        </>
    );
}
