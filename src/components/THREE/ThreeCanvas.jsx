import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stats } from "@react-three/drei";

import Desk from "./Models/Desk";
import css from '../../app.css'


function ThreeCanvas() {

  return(
    <>
      <Canvas className={css.Canvas}>
        <OrbitControls />
        <Stats />
        <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
          <Desk />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ThreeCanvas;