import React, { useMemo, forwardRef } from "react";
import * as THREE from "three";

interface PhoneFrameProps {
    opacity?: number;
    width?: number;
    height?: number;
    radius?: number;
    thickness?: number;
}

/**
 * Premium 3D Phone Frame
 * Features:
 * - Extruded geometry for physical depth
 * - Metallic materials with reflections
 * - Subtle bevel and realistic details (buttons, camera)
 */
export const PhoneFrame = forwardRef<THREE.Group, PhoneFrameProps>(({
    opacity = 0,
    width = 1,
    height = 2,
    radius = 0.15,
    thickness = 0.08
}, ref) => {
    // 1. Create the rounded rectangle shape for extrusion
    const frameShape = useMemo(() => {
        const shape = new THREE.Shape();
        const x = -width / 2;
        const y = -height / 2;

        shape.moveTo(x + radius, y);
        shape.lineTo(x + width - radius, y);
        shape.quadraticCurveTo(x + width, y, x + width, y + radius);
        shape.lineTo(x + width, y + height - radius);
        shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        shape.lineTo(x + radius, y + height);
        shape.quadraticCurveTo(x, y + height, x, y + height - radius);
        shape.lineTo(x, y + radius);
        shape.quadraticCurveTo(x, y, x + radius, y);

        // Hole for the screen (inner cutout) - Minimum Bezels for WOW factor
        const innerRadius = Math.max(0, radius - 0.01);
        const innerWidth = width - 0.015; // Ultra-thin side bezels
        const innerHeight = height - 0.04; // Minimal hardware forehead/chin
        const hole = new THREE.Path();
        const hX = -innerWidth / 2;
        const hY = -innerHeight / 2;

        hole.moveTo(hX + innerRadius, hY);
        hole.lineTo(hX + innerWidth - innerRadius, hY);
        hole.quadraticCurveTo(hX + innerWidth, hY, hX + innerWidth, hY + innerRadius);
        hole.lineTo(hX + innerWidth, hY + innerHeight - innerRadius);
        hole.quadraticCurveTo(hX + innerWidth, hY + innerHeight, hX + innerWidth - innerRadius, hY + innerHeight);
        hole.lineTo(hX + innerRadius, hY + innerHeight);
        hole.quadraticCurveTo(hX, hY + innerHeight, hX, hY + innerHeight - innerRadius);
        hole.lineTo(hX, hY + innerRadius);
        hole.quadraticCurveTo(hX, hY, hX + innerRadius, hY);

        shape.holes.push(hole);
        return shape;
    }, [width, height, radius]);

    const extrudeSettings = useMemo(() => ({
        steps: 1,
        depth: thickness,
        bezelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelOffset: 0,
        bevelSegments: 3
    }), [thickness]);

    // Material for the metallic body
    const frameMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: "#ff6b1bff",
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: opacity,
        envMapIntensity: 1,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
    }), [opacity]);

    // Screen Material
    const screenMaterial = useMemo(() => new THREE.MeshBasicMaterial({
        color: "#ff7c10f8",
        transparent: true,
        opacity: opacity * 0.9,
    }), [opacity]);

    return (
        <group ref={ref} position={[0, 0, -thickness / 2]}>
            {/* Main Extruded Frame */}
            <mesh geometry={new THREE.ExtrudeGeometry(frameShape, extrudeSettings)} material={frameMaterial} />

      

            <mesh position={[-width / 2 - 0.01, 0.8, thickness / 2]}>
                <boxGeometry args={[0.02, 0.15, 0.03]} />
                <meshStandardMaterial color="#ff7c10f8" metalness={0.8} transparent opacity={opacity} />
            </mesh>
        </group>
    );
});

PhoneFrame.displayName = "PhoneFrame";
