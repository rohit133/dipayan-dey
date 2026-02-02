"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;
        meshRef.current.position.y = Math.sin(t) * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color="#f97316"
                    speed={3}
                    distort={0.4}
                    radius={1}
                />
            </mesh>
        </Float>
    );
};

const Particles = ({ count = 500 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, [count]);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y += 0.001;
        pointsRef.current.rotation.x += 0.0005;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[points, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
        </points>
    );
};

const Hero3D: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#f97316" />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                <Particles count={800} />

                <group position={[2, 0, 0]}>
                    <FloatingShape />
                </group>

                <group position={[-2.5, -1.5, -2]}>
                    <Sphere args={[0.5, 32, 32]}>
                        <MeshDistortMaterial
                            color="#333"
                            speed={2}
                            distort={0.3}
                            radius={0.5}
                        />
                    </Sphere>
                </group>
            </Canvas>
        </div>
    );
};

export default Hero3D;
