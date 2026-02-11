"use client";
import * as THREE from "three";
import React, { useEffect, useRef, useMemo, JSX } from "react";
import { useGraph, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF, SkeletonUtils } from "three-stdlib";
type ActionName = "OpenChest";
interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}
type GLTFResult = GLTF & {
    nodes: {
        Object_14: THREE.SkinnedMesh;
        _rootJoint: THREE.Bone;
    };
    materials: {
        ["Gold_chest.001"]: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};
interface TreasureBoxProps {
    animationProgress?: number; // 0 to 1 for lid opening
    opacity?: number; // 0 to 1 for fade effect
}
export const TreasureBox: React.FC<TreasureBoxProps & React.ComponentProps<"group">> = ({
    animationProgress = 0,
    opacity = 1,
    ...props
}) => {
    const group = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF("/golden_chest.glb");
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;
    const { actions, mixer } = useAnimations(animations, group);
    // Store animation duration
    const animationDuration = useRef(0);
    useEffect(() => {
        const action = actions["OpenChest"];
        if (action) {
            // Setup: paused animation we control manually
            action.reset();
            action.paused = true;
            action.play();
            action.setLoop(THREE.LoopOnce, 1);
            action.clampWhenFinished = true;
            animationDuration.current = action.getClip().duration;
        }
    }, [actions]);
    // Control animation progress based on scroll
    useFrame(() => {
        const action = actions["OpenChest"];
        if (action && animationDuration.current > 0) {
            // Map progress (0-1) to animation time
            action.time = animationProgress * animationDuration.current;
        }
    });
    // Update material opacity for fade effect
    useEffect(() => {
        const mat = materials["Gold_chest.001"];
        if (mat) {
            mat.transparent = true;
            mat.opacity = opacity;
            mat.needsUpdate = true;
        }
    }, [opacity, materials]);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="e4d81a8fad3c473d926c9ea38d2a552cfbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Armature_Gold_Chest"
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}
                                >
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <group
                                            name="Object_13"
                                            rotation={[-Math.PI / 2, 0, 0]}
                                            scale={100}
                                        />
                                        <skinnedMesh
                                            name="Object_14"
                                            geometry={nodes.Object_14.geometry}
                                            material={materials["Gold_chest.001"]}
                                            skeleton={nodes.Object_14.skeleton}
                                            castShadow
                                            receiveShadow
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Gold_Chest"
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};
useGLTF.preload("/golden_chest.glb");