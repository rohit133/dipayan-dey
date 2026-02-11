import { Html } from "@react-three/drei";
import { forwardRef } from "react";
import * as THREE from "three";

interface PhoneFeedProps {
    opacity: number;
}

// 1 unit = 100px roughly. 
// Phone width 340px * 0.01 = 3.4 units. Matches orb width ~3.8 units.
const SCALE_FACTOR = 0.01;

export const PhoneFeed = forwardRef<THREE.Group, PhoneFeedProps>(({ opacity }, ref) => {
    return (
        <group ref={ref} scale={0} >
            {/* Internal scaler to convert pixels to world units */}
            <group scale={SCALE_FACTOR}>
                <Html
                    transform
                    occlude
                    position={[0, 0, 0]}
                    style={{
                        opacity: opacity,
                        transition: 'opacity 0.5s',
                        width: '340px',
                        height: '680px',
                        backgroundColor: '#000',
                        borderRadius: '40px',
                        border: '4px solid #333',
                        padding: '20px',
                        overflowY: 'auto',
                        pointerEvents: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        boxShadow: '0 0 40px rgba(255, 120, 50, 0.4)', // Subtle glow matching orb
                        // Center the element
                        transform: 'translate3d(-50%, -50%, 0)',
                    }}
                >
                    {/* Status Bar / Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: '#fff',
                        marginBottom: '10px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>
                        <span>9:41</span>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <span>5G</span>
                            <span>100%</span>
                        </div>
                    </div>

                    {/* Feed Content */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                        {/* Post 1 */}
                        <div style={{ backgroundColor: '#1a1a1a', padding: '12px', borderRadius: '16px', color: '#fff' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ff7700' }}></div>
                                <div style={{ fontSize: '14px', fontWeight: '600' }}>FormPilot</div>
                            </div>
                            <div style={{ fontSize: '13px', lineHeight: '1.4', color: '#ccc' }}>
                                Turning ideas into reality. Our new AI-driven workflow is changing the game. 🚀 #Innovation #Tech
                            </div>
                            <div style={{ height: '120px', backgroundColor: '#333', borderRadius: '10px', marginTop: '10px' }}></div>
                        </div>

                        {/* Post 2 */}
                        <div style={{ backgroundColor: '#1a1a1a', padding: '12px', borderRadius: '16px', color: '#fff' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#444' }}></div>
                                <div style={{ fontSize: '14px', fontWeight: '600' }}>User123</div>
                            </div>
                            <div style={{ fontSize: '13px', lineHeight: '1.4', color: '#ccc' }}>
                                Just tried the new features. The speed is incredible! ⚡️
                            </div>
                        </div>

                        {/* Post 3 */}
                        <div style={{ backgroundColor: '#1a1a1a', padding: '12px', borderRadius: '16px', color: '#fff' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#6699aa' }}></div>
                                <div style={{ fontSize: '14px', fontWeight: '600' }}>DevTeam</div>
                            </div>
                            <div style={{ fontSize: '13px', lineHeight: '1.4', color: '#ccc' }}>
                                We are hiring! Join us to build the future of forms.
                            </div>
                            <div style={{ height: '80px', backgroundColor: '#333', borderRadius: '10px', marginTop: '10px' }}></div>
                        </div>

                        {/* Post 4 */}
                        <div style={{ backgroundColor: '#1a1a1a', padding: '12px', borderRadius: '16px', color: '#fff' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ff7700' }}></div>
                                <div style={{ fontSize: '14px', fontWeight: '600' }}>FormPilot</div>
                            </div>
                            <div style={{ fontSize: '13px', lineHeight: '1.4', color: '#ccc' }}>
                                Seamless integration with your favorite tools.
                            </div>
                        </div>
                    </div>
                </Html>
            </group>
        </group>
    );
});

PhoneFeed.displayName = "PhoneFeed";
