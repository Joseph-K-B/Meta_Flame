import * as THREE from 'three';
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


import Desk from "../Models/Desk";
import META from "../Models/META";


function Scene() {
  const { viewport } = useThree();


  return(
    <>
      <OrbitControls makeDefault/>
      <META />
      <Desk />
    </>
  );
};

export default Scene;