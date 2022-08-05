import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Avatar'

import * as dat from 'dat.gui';

export default function Scene() {

  const mesh = useRef(null);

 // useEffect(() => {
 //     const gui = new dat.GUI({width:400});

 //     const debugObject = {
 //       position: {
 //         x : 0,
 //         y : 0,
 //         z : 0
 //       }
 //     }

 //     gui.add(debugObject.position, 'x')
 //         .min(-10)
 //         .max(10)
 //         .step(0.01)
 //         .onChange( () => {
 //             mesh.current.position.x = debugObject.position.x;
 //         })
 //         .name("Pos x");
 //     
 //     
 //     gui.add(debugObject.position, 'y')
 //         .min(-10)
 //         .max(10)
 //         .step(0.01)
 //         .onChange( () => {
 //             mesh.current.position.y = debugObject.position.y;
 //         })
 //         .name("Pos y");
 //         
 //     return () => gui.destroy();
 // }, []);

  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <mesh ref={mesh} scale={4} position={[1.17, -2.48, 0]}>
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
        </Suspense>
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}