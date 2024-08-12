/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 linux.gltf 
Author: Andy Cuccaro (https://sketchfab.com/andycuccaro)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tux-157de95fa4014050a969a8361a83d366
Title: Tux
*/

import React, {useRef, Suspense} from 'react'
import { useGLTF, Environment, PerspectiveCamera } from '@react-three/drei'
import  {Canvas, useFrame}  from '@react-three/fiber';

import CanvasLoader from './Loader';  

function Model(props) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/3d/linux.gltf`);

  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.5; // Adjust speed as needed
    }
  });

  return (
    <group {...props}ref={ref} dispose={null}   rotation={[4, 0, 0]} scale={0.5}>
      <group position={[0.002, -0.027, -0.719]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Tux-printable_0'].geometry} material={materials.black} />
        <mesh geometry={nodes['Tux-printable_1'].geometry} material={materials.white} />
        <mesh geometry={nodes['Tux-printable_2'].geometry} material={materials.orange} />
      </group>
    </group>
  )
}

export default function Linux(){
  return(
    <Canvas style={{ height: '200px', width: '200px' }}> {/* Ajustez la taille si nécessaire */}
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 80]} // Ajustez la position si nécessaire
        fov={75}
        near={0.1}
        far={1000}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <group rotation={[-Math.PI / 2, Math.PI, 0]}>
          <Model position={[0,0,0]} scale={[0.5, 0.5, 0.5]} />
        </group>
      </Suspense>
    </Canvas>
  );

}

useGLTF.preload('/linux.gltf')
