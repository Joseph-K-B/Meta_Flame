import { OrbitControls, Plane } from "@react-three/drei";


import Desk from "../Models/Desk";
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
      
      <META />
      <Desk />
      <Plane
        args={[10, 100, 10, 100]}
        position={[0, -0.365, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial color='purple' wireframe />
      </Plane>
    </>
  );
};

export default Scene;