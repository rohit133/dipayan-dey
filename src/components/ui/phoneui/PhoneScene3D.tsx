"use client";

import React, { useRef, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { PhoneFrame3D } from "./PhoneFrame3D";
import { SCROLL } from "./scrollRanges";

interface PhoneScene3DProps {
  progress: number;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

/**
 * Frame and content reveal together (same curve as screen in PhoneSection)
 * so the user never sees a raw empty frame. Phone stays centered.
 */
export default function PhoneScene3D({ progress }: PhoneScene3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const revealT = useMemo(() => {
    const { REVEAL_START, REVEAL_END } = SCROLL;
    if (progress <= REVEAL_START) return 0;
    if (progress >= REVEAL_END) return 1;
    return (progress - REVEAL_START) / (REVEAL_END - REVEAL_START);
  }, [progress]);

  const baseScale = useMemo(() => {
    const phoneHeightUnits = 1.9;
    const targetHeightPx = 360;
    return targetHeightPx / viewport.factor / phoneHeightUnits;
  }, [viewport.factor]);

  const scale = useMemo(
    () => baseScale * lerp(0.92, 1, revealT),
    [baseScale, revealT]
  );

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <group ref={groupRef} position={[0, 0, 0]} scale={scale}>
        <PhoneFrame3D opacity={revealT} width={1.12} height={1.9} />
      </group>
    </>
  );
}
