/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import * as THREE from 'three';

import { useGLTF } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useStore } from '../../../hooks/useStand';

export default function Desk({ ...props }) {
  const page = useStore((state) => state.page);
  const home = useStore((state) => state.home);  

  const group = useRef();

  const { camera } = useThree();
  const { nodes, materials } = useGLTF('/desk/desk.glb');

  const texture = useLoader(THREE.TextureLoader, '/desk/bakin.jpg');
  texture.flipY = false;

  const vec = new THREE.Vector3()
  const vecTwo = new THREE.Vector3()

  /*
  camera positions
  start: [0, 0, 0],
  second: [5, 10, 5],
  third: [0.002277, 0.004555497, -4.9954],
  fourth: [0.7499, 0.499, -2.5500]
  */

  useFrame(() => {
    // console.log(camera.position)
    const step = 0.05
    if(page === 1) {
      vec.set(0, -1.5, -1)
      group.current.position.lerp(vec, step)
    }
    if(page === 2) {
      vec.set(5, 10, 5)
      camera.position.lerp(vec, step)
    }
    if(page === 3) {
      vec.set(0, 0, -5)
      camera.position.lerp(vec, step)
    }
    if(page === 4) {
      vec.set(-0.75, 0.5, -2.25)
      camera.position.lerp(vec, step)
    }
    if(page === 5) {
      vec.set(0, 3, -5);
      vecTwo.set(0, -10, 0);
      camera.position.lerp(vec, step);
      group.current.position.lerp(vecTwo, step / 2)
    }
    // if(page === 0) {
    //   vec.set(0, 3.0616997, 5);
    //   camera.position.lerp(vec, step / 2);
    // }
  });

  return (
    <group 
      ref={group}
      scale={0.25} 
      position={[0, -10, 0]}
      dispose={null}
    >
      <mesh
        onClick={() => console.log(camera.position)} 
        geometry={nodes.Cube.geometry} 
        // material={nodes.Cube.material} 
        position={[2.31, 3.74, 2.87]} 
        rotation={[-Math.PI, -0.64, -Math.PI]} 
        scale={[3.38, 0.29, 2.03]} 
      >
        <meshBasicMaterial 
          map={texture}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/desk/desk.glb');
