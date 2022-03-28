import { Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


function ThreeCanvas() {

  return(
    <>
      <Canvas>
        <Sphere>
          <meshBasicMaterial color='bue' wireframe />
        </Sphere>
      </Canvas>
    </>
  );
};

export default ThreeCanvas;