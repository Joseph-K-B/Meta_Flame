//Dep
import { useRef } from 'react';
import * as THREE from 'three';

//Dev Dep
import { OrbitControls, Plane } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

//Local
import { useStore } from "../../../hooks/useStand";
import DeskTwo from "../Models/DeskTwo";
import META from "../Models/META";


function Scene() {
  //State
  const page = useStore((state) => state.page);
  const forward = useStore((state) => state.forward);

  //Refs
  const group = useRef();
  const grid = useRef();

  //Imported objects
  const { camera } = useThree();

  //Vectors and Quaternions
  const vec = new THREE.Vector3();
  const vecTwo = new THREE.Vector3();


  //Tick
  useFrame((state, delta) => {
    /*
      See META file in Models folder for more info
      A lot of the position states should be moved to store
      each 'page' is merely just scene state
      (camera, object, and environment transitions)
    */
    const deskPosition = group.current.position;
    const step = 0.05
    if(page === 0) {
      vec.set(0, 3.0616997, 5);
      vecTwo.set(0, -17, 0);
      camera.position.lerp(vec, step / 2);
      deskPosition.lerp(vecTwo, step * 2)
    }
    if(page === 1) {
      vec.set(0, -1, -3)
      deskPosition.lerp(vec, step)
    }
    if(page === 2) {
      vec.set(5, 10, 5)
      camera.position.lerp(vec, step)
    }
    if(page === 3) {
      vec.set(0, 1.5, -10)
      camera.position.lerp(vec, step)
    }
    if(page === 4) {
      vec.set(0, 1.5, -4)
      vecTwo.set(0, 1.15, 0);
      camera.position.lerp(vec, step)
      grid.current.position.lerp(vecTwo, step / 2)
    }
    if(page === 5) {
      vec.set(0, 1.5, -5);
      vecTwo.set(0, 1.15, -100);
      // camera.position.lerp(vec, step);
      // deskPosition.lerp(vecTwo, step / 2)
      grid.current.position.lerp(vecTwo, step * 0.05)
    }
    if(page === 6) {
      vec.set(0, 3, -5);
      vecTwo.set(0, -17, 0);
      camera.position.lerp(vec, step);
      deskPosition.lerp(vecTwo, step / 2)
    }
    if(!forward && page === 5) {
      vec.set(0, -1, -1);
      vecTwo.set(0, 1, -3.5);
      deskPosition.lerp(vec, step);
      camera.position.lerp(vecTwo, step);
    }
  });


  return(
    <>
      <OrbitControls makeDefault/>
      <group>
        <META />
      </group>
      <group ref={group}>
        <DeskTwo />
        <Plane
          ref={grid}
          args={[10, 100, 10, 100]}
          position={[0, 1.15, 100]} 
          rotation={[-Math.PI / 2, 0, 0]}
          visible={page > 3 ? true : false}
        >
          <meshBasicMaterial color='purple' wireframe />
        </Plane>
      </group>
    </>
  );
};

export default Scene;