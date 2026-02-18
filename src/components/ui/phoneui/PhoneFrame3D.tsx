"use client";

import React, { useMemo, forwardRef } from "react";
import * as THREE from "three";

interface PhoneFrame3DProps {
  opacity: number;
  width?: number;
  height?: number;
  radius?: number;
  thickness?: number;
}

/**
 * 3D phone frame (extruded rounded rect + notch). No media assets.
 */
export const PhoneFrame3D = forwardRef<THREE.Group, PhoneFrame3DProps>(
  (
    {
      opacity,
      width = 1,
      height = 2,
      radius = 0.15,
      thickness = 0.08,
    },
    ref
  ) => {
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

      const innerRadius = Math.max(0, radius - 0.01);
      const innerWidth = width - 0.015;
      const innerHeight = height - 0.04;
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

    const extrudeSettings = useMemo(
      () => ({
        steps: 1,
        depth: thickness,
        bezelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelOffset: 0,
        bevelSegments: 3,
      }),
      [thickness]
    );

    const frameMaterial = useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: "#1f1f1f",
          metalness: 0.65,
          roughness: 0.22,
          transparent: true,
          opacity,
          envMapIntensity: 0.5,
          clearcoat: 0.35,
          clearcoatRoughness: 0.2,
          emissive: "#0d0d0d",
        }),
      [opacity]
    );

    const geometry = useMemo(
      () => new THREE.ExtrudeGeometry(frameShape, extrudeSettings),
      [frameShape, extrudeSettings]
    );

    return (
      <group ref={ref} position={[0, 0, -thickness / 2]}>
        <mesh geometry={geometry} material={frameMaterial} />
        <mesh position={[-width / 2 - 0.01, height * 0.4, thickness / 2]}>
          <boxGeometry args={[0.02, 0.12, 0.02]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.3} transparent opacity={opacity} />
        </mesh>
      </group>
    );
  }
);

PhoneFrame3D.displayName = "PhoneFrame3D";
