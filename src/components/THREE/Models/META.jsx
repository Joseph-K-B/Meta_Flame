/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import * as THREE from 'three';


import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';


import { useStore } from '../../../hooks/useStand';

export default function META({ ...props }) {
  const page = useStore((state) => state.page);
  const animationOne = useStore((state) => state.animationOne);
  const home = useStore((state) => state.home);

  const group = useRef()

  const {viewport}= useThree();
  const { nodes, materials } = useGLTF('/META.glb');

  const vec = new THREE.Vector3();

  useFrame(() => {
    const step = 0.05
    if(page > 0 && page <= 1) {
      vec.set(0, 10, -1)
      group.current.position.lerp(vec, step)
    }
    if(page === 0) {
      vec.set(0, -1.25, -1)
      group.current.position.lerp(vec, step)
    }
    if(page > 4) {
      vec.set(0, -1.25, -0.5)
      group.current.position.lerp(vec, step / 3)
    }
  });


  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null}
      rotation={[Math.PI / 6, -Math.PI / 3, 0]}
      // scale={viewport.width / 6}
      position={[0, -1.25, -1]}
      // position={[0, -1.25, -1]}
      onClick={() => console.log(viewport)}
    >
      <group position={[0.27, 0.42, -1.37]} scale={2.08}>
        <group rotation={[0.42, 0.05, 0.23]}>
          <group position={[0, 0.17, 0]} rotation={[0.02, 0, 0.01]}>
            <group position={[0, 0.17, 0]} rotation={[-0.32, 0.03, -0.18]}>
              <group position={[0, 0.17, 0]} rotation={[-0.5, 0.07, -0.27]}>
                <group position={[0, 0.17, 0]} rotation={[-0.45, 0.06, -0.25]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[1.51, 0.01, -0.27]} rotation={[0, -0.98, 0]} scale={2.08}>
        <group rotation={[0.42, 0.05, 0.23]}>
          <group position={[0, 0.17, 0]} rotation={[0.02, 0, 0.01]}>
            <group position={[0, 0.17, 0]} rotation={[-0.32, 0.03, -0.18]}>
              <group position={[0, 0.17, 0]} rotation={[-0.5, 0.07, -0.27]}>
                <group position={[0, 0.17, 0]} rotation={[-0.45, 0.06, -0.25]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-0.11, 0.47, 0.76]} rotation={[-2.84, 0.3, 2.82]} scale={1.67}>
        <group rotation={[0.34, -0.01, -0.04]}>
          <group position={[0, 0.17, 0]} rotation={[-0.02, 0, 0]}>
            <group position={[0, 0.17, 0]} rotation={[-0.31, -0.01, 0.04]}>
              <group position={[0, 0.17, 0]} rotation={[-0.44, -0.01, 0.05]}>
                <group position={[0, 0.17, 0]} rotation={[-0.39, -0.01, 0.04]} />
              </group>
            </group>
          </group>
        </group>
        <mesh 
          geometry={nodes.tentacle3.geometry} 
          material={nodes.tentacle3.material} 
          scale={0.48} 
        >
          <meshBasicMaterial color='orange' />
        </mesh>
      </group>
      <mesh 
        geometry={nodes.pyramid.geometry} 
        // material={nodes.pyramid.material} 
        position={[-0.08, 2.65, -0.07]} 
        rotation={[2.58, -0.09, 3.09]} 
        scale={[-0.03, -0.02, 0.12]} 
      >
        <meshBasicMaterial color='gray' />
      </mesh>
      <mesh 
        geometry={nodes.small_sphere.geometry} 
        // material={nodes.small_sphere.material} 
        position={[-0.08, 2.65, -0.06]} 
        rotation={[Math.PI, -0.1, Math.PI]} 
        scale={0.07} 
      >
        <meshBasicMaterial color='gray' />
      </mesh>
      <mesh 
        geometry={nodes.middle_sphere.geometry} 
        // material={nodes.middle_sphere.material} 
        position={[-0.09, 2.65, -0.07]} 
        scale={-0.21} 
      >
        <meshBasicMaterial color='blue' wireframe/>
      </mesh>
      {/* <mesh 
        geometry={nodes.electric_sphere.geometry} 
        material={nodes.electric_sphere.material} 
        position={[-0.09, 2.65, -0.07]} 
        scale={0.3} 
      >
        <meshBasicMaterial color='aqua' />
      </mesh> */}
      <mesh 
        geometry={nodes.crystal.geometry} 
        // material={nodes.crystal.material} 
        position={[0, 1.12, -2.44]} 
        rotation={[2.64, -0.28, 2.99]} 
        scale={[-0.21, -0.48, -0.21]} 
      >
        <meshBasicMaterial color='purple' />
      </mesh>
      <mesh 
        geometry={nodes.island.geometry} 
        // material={nodes.island.material} 
        position={[-0.85, 0.73, -0.86]} 
      >
        <meshBasicMaterial color='#43464b' />
      </mesh>
      <mesh 
        geometry={nodes.water.geometry} 
        // material={nodes.water.material} 
        position={[0.55, -1.91, 2]} 
        scale={1.1} 
      >
        <meshBasicMaterial color='blue' />
      </mesh>
      <mesh 
        geometry={nodes.ground.geometry} 
        // material={nodes.ground.material} 
        position={[-0.85, 0.73, -0.86]} 
      >
        <meshBasicMaterial color='green' />
      </mesh>
    </group>
  )
}

useGLTF.preload('/META.glb')
