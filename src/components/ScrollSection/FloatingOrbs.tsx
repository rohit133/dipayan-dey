"use client";

import React, { useMemo } from "react";
import { shaderMaterial, Line } from "@react-three/drei";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

/**
 * Particle Shader Material
 * Vertex: Noise-driven displacement for "alive" feel
 * Fragment: Radial glow for soft particles
 */
const ParticleMaterial = shaderMaterial(
    {
        uTime: 0,
        uColor: new THREE.Color("#ff6000"),
        uOpacity: 1.0,
        uPointSize: 0.015,
        uMouse: new THREE.Vector3(0, 0, 0),
        uWobble: 0.0,
        uMorph: 0.0,
        uBorder: 0.0, // New uniform for border transformation
        uAspectRatio: 0.6, // Aspect ratio for the screen
    },

    // Vertex Shader
    `
  uniform float uTime;
  uniform float uPointSize;
  uniform vec3 uMouse;
  uniform float uWobble;
  uniform float uMorph;
  uniform float uBorder;
  uniform float uAspectRatio;
  varying float vNoise;
  varying float vDistToMouse;
  
  // Simple noise function
  float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
  vec3 mod289(vec3 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
  vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

  float pnoise(vec3 P, vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep);
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
    Pi0 = mod289(Pi0); Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = vec4(Pi0.zzzz); vec4 iz1 = vec4(Pi1.zzzz);
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0); vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 / 7.0; vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0); vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0)); gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 / 7.0; vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1); vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0)); gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x); vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z); vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x); vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z); vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g100, g100), dot(g010, g010), dot(g110, g110)));
    g000 *= norm0.x; g100 *= norm0.y; g010 *= norm0.z; g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g101, g101), dot(g011, g011), dot(g111, g111)));
    g001 *= norm1.x; g101 *= norm1.y; g011 *= norm1.z; g111 *= norm1.w;
    float n000 = dot(g000, Pf0); float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z)); float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z)); float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz)); float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
  }

  void main() {
    vNoise = pnoise(position * 3.0 + uTime * 0.5, vec3(10.0));
    
    // Calculate world position for mouse interaction
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vDistToMouse = distance(worldPosition.xyz, uMouse);
    float mouseRepel = smoothstep(2.0, 0.0, vDistToMouse);
    
    // Sphere Position
    vec3 spherePos = position + normal * (vNoise * 0.15 + uWobble * 0.1) + normalize(position) * mouseRepel * 0.3;
    
    // Calculate UVs from position manually (Spherical Mapping)
    vec3 n = normalize(position);
    float u = atan(n.x, n.z) / (2.0 * 3.14159265359) + 0.5;
    float v = n.y * 0.5 + 0.5;

    // Rectangle Position (Screen)
    float rectW = uAspectRatio;
    float rectH = 1.0;
    vec3 rectPos = vec3(
        (u - 0.5) * rectW,
        (v - 0.5) * rectH,
        0.0
    );

    // Apply Border Radius to the FILLED rectangle shape too (Interior Rounding)
    // This prevents the sharp corners during morph
    float radius = 0.05;
    vec3 borderPos = rectPos;
    float halfW = rectW * 0.5;
    float halfH = rectH * 0.5;
    float edgeX = halfW - radius;
    float edgeY = halfH - radius;
    
    vec2 pAbs = abs(rectPos.xy);
    if (pAbs.x > edgeX && pAbs.y > edgeY) {
        // We are in the corner zone of the filled rectangle
        vec2 cornerCenter = vec2(sign(rectPos.x) * edgeX, sign(rectPos.y) * edgeY);
        vec2 diff = rectPos.xy - cornerCenter;
        
        // If point is outside the rounded corner, pull it in
        if (length(diff) > radius) {
            rectPos.xy = cornerCenter + normalize(diff) * radius;
        }
    }

    // Border Logic: Snap to nearest edge (Exterior Rounding)
    // Check if we need to snap to the border line
    // Reuse the corner logic from above since we already calculated edgeX/Y
    
    borderPos = rectPos;
    
    if (pAbs.x > edgeX && pAbs.y > edgeY) {
        // Corner region: snap to arc
        vec2 cornerCenter = vec2(sign(rectPos.x) * edgeX, sign(rectPos.y) * edgeY);
        vec2 diff = rectPos.xy - cornerCenter;
        if (length(diff) > 0.0001) {
             borderPos.xy = cornerCenter + normalize(diff) * radius;
        } else {
             borderPos.xy = cornerCenter + vec2(radius, 0.0);
        }
    } else {
        // Straight edge region: snap to closest side
        float dx = halfW - pAbs.x;
        float dy = halfH - pAbs.y;
        
        if (dx < dy) {
            borderPos.x = sign(rectPos.x) * halfW;
            borderPos.y = rectPos.y; 
        } else {
            borderPos.x = rectPos.x; 
            borderPos.y = sign(rectPos.y) * halfH;
        }
    }
    
    // Apply border transformation
    vec3 boxPos = mix(rectPos, borderPos, uBorder);
    
    // NO JITTER on border for clean line
    // Previously: if(uBorder > 0.0) { boxPos += ... } -> REMOVED

    vec3 finalPos = mix(spherePos, boxPos, uMorph);
    
    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
    gl_PointSize = uPointSize * (300.0 / -mvPosition.z);
    
    // Pulse point size slightly near mouse
    gl_PointSize *= (1.0 + mouseRepel * 0.5);
    
    // Sharpen dots when morphed
    gl_PointSize *= (1.0 + uMorph * 1.5);
    
    // Make dots LARGER to form a solid line when border is active
    if (uBorder > 0.0) {
        gl_PointSize *= (1.0 + uBorder * 1.5);
    }
    
    gl_Position = projectionMatrix * mvPosition;
  }
  `,
    // Fragment Shader
    `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uMorph; 
  uniform float uBorder;
  varying float vNoise;
  varying float vDistToMouse;

  void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;
    
    float strength = 1.0 - (dist * 2.0);
    strength = pow(strength, 1.5);
    
    // Sharpen dots when morphed
    float sharpDot = smoothstep(0.5, 0.45, dist);
    strength = mix(strength, sharpDot, uMorph);

    float mouseGlow = smoothstep(1.5, 0.0, vDistToMouse);

    float finalOpacity = strength * uOpacity;
    if(uBorder > 0.0) {
        finalOpacity = mix(finalOpacity, 1.0, uBorder); 
    }

    // Simplified color logic to ensure true orange
    vec3 baseColor = uColor;
    float borderGlow = uBorder * 0.2; 
    
    // Slight variation in brightness, but keep hue
    vec3 color = baseColor * (1.0 + vNoise * 0.2 + mouseGlow * 0.4);

    // Make denser when border active
    if(uBorder > 0.0) {
        color = baseColor * 1.5; 
    }
    
    // Output with controlled brightness
    gl_FragColor = vec4(color * (1.5 + uMorph * 0.5 + borderGlow), finalOpacity);
  }
  `

);

extend({ ParticleMaterial });

// Add types for the custom shader material
declare global {
    namespace JSX {
        interface IntrinsicElements {
            particleMaterial: any;
        }
    }
}

interface FloatingOrbsProps {
    mainOrbRef: React.RefObject<THREE.Points | null>;
    opacity?: number;
    morph?: number;
    border?: number;
    aspectRatio?: number;
}

// Helper for rounded rect points
const getRoundedRectPoints = (w: number, h: number, r: number, segments = 20) => {
    const points: THREE.Vector3[] = [];
    const push = (x: number, y: number) => points.push(new THREE.Vector3(x, y, 0));

    // Top right
    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI / 2;
        push((w / 2 - r) + r * Math.cos(theta), (h / 2 - r) + r * Math.sin(theta));
    }
    // Top left
    for (let i = 0; i <= segments; i++) {
        const theta = Math.PI / 2 + (i / segments) * Math.PI / 2;
        push(-(w / 2 - r) + r * Math.cos(theta), (h / 2 - r) + r * Math.sin(theta));
    }
    // Bottom left
    for (let i = 0; i <= segments; i++) {
        const theta = Math.PI + (i / segments) * Math.PI / 2;
        push(-(w / 2 - r) + r * Math.cos(theta), -(h / 2 - r) + r * Math.sin(theta));
    }
    // Bottom right
    for (let i = 0; i <= segments; i++) {
        const theta = 3 * Math.PI / 2 + (i / segments) * Math.PI / 2;
        push((w / 2 - r) + r * Math.cos(theta), -(h / 2 - r) + r * Math.sin(theta));
    }
    // Close loop
    push((w / 2 - r) + r, (h / 2 - r));

    return points;
};

export const FloatingOrbs: React.FC<FloatingOrbsProps> = ({
    mainOrbRef,
    opacity = 1,
    morph = 0,
    border = 0,
    aspectRatio = 0.5625
}) => {
    // Generate particles
    const particles = useMemo(() => {
        const temp = [];
        // Increased from 1500 to 5500 for higher density
        for (let i = 0; i < 5500; i++) {
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(2 * Math.random() - 1);
            const x = 4 * Math.sin(p) * Math.cos(t);
            const y = 4 * Math.sin(p) * Math.sin(t);
            const z = 4 * Math.cos(p);
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, []);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Initial off-screen/fly-in positions (will be animated by GSAP)
    const initialPositions = {
        main: [0, -10, -5],
    };

    // Generate border line points - matches HTML div aspect ratio (340/620)
    const linePoints = useMemo(() => getRoundedRectPoints(aspectRatio, 1.0, 0.05), [aspectRatio]);

    return (
        <group>
            {/* ============ DASHED BORDER LINE ============ */}
            {/* Fades in to create the "Phone Frame" effect */}
            <Line
                points={linePoints}
                color="#ff6000"
                lineWidth={4}
                dashed
                dashSize={0.2}
                gapSize={0.1}
                transparent
                opacity={Math.max(0, (border - 0.5) * 2)} // Fade in only during the last half of border transition
                visible={border > 0.43}
            />

            {/* ============ MAIN ORB ============ */}
            <points ref={mainOrbRef} position={initialPositions.main as any} frustumCulled={false}>
                <sphereGeometry args={[1.2, 64, 64]} />
                {/* @ts-ignore */}
                <particleMaterial
                    transparent
                    uColor={new THREE.Color("#ff6000")}
                    uOpacity={opacity}
                    uPointSize={1}
                    uMorph={morph}
                    uBorder={border}
                    uAspectRatio={aspectRatio}
                    depthWrite={false}
                    blending={THREE.NormalBlending}
                />
            </points>




        </group>
    );
};