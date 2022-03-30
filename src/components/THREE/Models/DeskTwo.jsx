/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { useStore } from '../../../hooks/useStand';


export default function DeskTwo({ ...props }) {
  const page = useStore((state) => state.page);

  const group = useRef();
  const { nodes, materials } = useGLTF('/desk_2.glb')

  const texture = useLoader(THREE.TextureLoader, '/Untitled.jpg');
  texture.flipY = false;


  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null} 
      scale={0.25}
      rotation={[ 0, -.685, 0]}
    >
      <mesh 
        geometry={nodes.keyboard.geometry} 
        material={nodes.keyboard.material} 
        position={[0.61, 4.52, 0.42]} 
        rotation={[Math.PI / 2, 0, -0.71]} 
        scale={0.12} 
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh 
        geometry={nodes.mouse001.geometry} 
        material={nodes.mouse001.material} 
        position={[-1.66, 4.48, 2.55]} 
        rotation={[1.53, -0.04, -0.83]} scale={0.13} 
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh 
        geometry={nodes.Circle.geometry} 
        material={nodes.Circle.material} 
        position={[6.46, 4.38, 0.23]} 
        rotation={[-Math.PI, 0.71, -Math.PI]} scale={0.9} 
      >
        <meshBasicMaterial map={texture} visible={page < 5 ? true : false}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/desk_2.glb')
