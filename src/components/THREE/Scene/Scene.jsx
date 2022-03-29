import { useThree } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";


import Page from "../../HTML/Page";
import Desk from "../Models/Desk";
import META from "../Models/META";


function Scene() {
  const { viewport } = useThree();

  return(
    <>
      <ScrollControls
        pages={4}
        distance={1}
        damping={4}
      >
        <Scroll>
          <META />
          <Desk position = {[0, viewport.height, 0]}/>
        </Scroll>
        <Scroll html>
          <h1>html in here (optional)</h1>
          <h1 style={{ top: '100vh' }}>second page</h1>
          <h1 style={{ top: '200vh' }}>third page</h1>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Scene;