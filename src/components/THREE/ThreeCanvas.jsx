//Dep
import { Suspense } from "react";

//Dev Dep
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stats } from "@react-three/drei";

//Local
import Scene from "./Scene/Scene";
import css from '../../app.css'


function ThreeCanvas() {

  return(
    <>
      <Canvas 
        className={css.Canvas}
      >
        <OrbitControls />
        <Stats />
        <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ThreeCanvas;