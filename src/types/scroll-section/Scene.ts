import { Vector3, Color } from "three";

export interface IOrbProps {
    position: Vector3;
    color: Color;
    size: number;
    speed: number;
}

export interface IPhoneFrameProps {
    visible: boolean;
    opacity: number;
    glowIntensity: number;
}

export interface ISceneUniforms {
    uTime: { value: number };
    uColor: { value: Color };
    uIntensity: { value: number };
}
