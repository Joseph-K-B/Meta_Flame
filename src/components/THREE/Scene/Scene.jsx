import { Float, OrbitControls, SpotLight, Text } from "@react-three/drei";


import Desk from "../Models/Desk";
import META from "../Models/META";


function Scene() {


  return(
    <>
      {/* <directionalLight intensity={0.35}/> */}
      <OrbitControls makeDefault/>
      <pointLight position={[1, 0, -3]}/>
      {/* <SpotLight position={[0, 5, 0]} color='red' angle={3} />
      <SpotLight position={[3, 4, 0]} color='blue' angle={3} /> */}
      <Text position={[0, 2, 0]}>Meta</Text>
      <META />
      <Desk />
    </>
  );
};

export default Scene;