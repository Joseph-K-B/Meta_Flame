import { OrbitControls, Plane } from "@react-three/drei";


import Desk from "../Models/Desk";
import DeskTwo from "../Models/DeskTwo";
import META from "../Models/META";


function Scene() {


  return(
    <>
      {/* <directionalLight intensity={0.35}/> */}
      <OrbitControls makeDefault/>
      {/* <gridHelper /> */}
      <axesHelper />
      {/* <SpotLight position={[0, 5, 0]} color='red' angle={3} />
      <SpotLight position={[3, 4, 0]} color='blue' angle={3} /> */}
      <DeskTwo />
      {/* <META /> */}
      {/* <Desk /> */}
    </>
  );
};

export default Scene;