import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stats } from "@react-three/drei";

import css from '../../app.css'
import Scene from "./Scene/Scene";


function ThreeCanvas() {

  return(
    <>
      <Canvas 
        className={css.Canvas}
        // camera={{position: [0, 0, 0]}}
      >
        <OrbitControls />
        {/* <Stats /> */}
        <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ThreeCanvas;