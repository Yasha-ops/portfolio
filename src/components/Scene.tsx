import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Avatar'

import * as dat from 'dat.gui';




function Head() {
    const mesh = useRef(null);
    const { viewport } = useThree()
    return (
        <mesh ref={mesh} position={[1.17, -2.48, 0]} scale={5}>
            <Suspense fallback={null}>
                <Model position={[-0.12, -0.1, 0.7]} /> /* highlight-line */
            </Suspense>
        </ mesh>
    );
}

export default function Scene() {
    return (
        <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{backgroundColor: '#111a21'}}
            dpr={[1, 2]} >
            <ambientLight intensity={1.25} />
            <directionalLight intensity={0.4} />
            <Head />
        </Canvas>
    );
}