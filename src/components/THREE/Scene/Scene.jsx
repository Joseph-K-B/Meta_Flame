import * as THREE from 'three';
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


import Desk from "../Models/Desk";
import META from "../Models/META";
import Grass from '../Terrain/Grass';


function Scene() {
  const { viewport } = useThree();


  return(
    <>
      <ambientLight intensity={0.05} />
      <OrbitControls makeDefault/>
      <Grass />
      {/* <META /> */}
      {/* <Desk /> */}
    </>
  );
};

export default Scene;