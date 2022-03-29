import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import vertexShader from './glsl/vertex.glsl';
import fragmentShader from './glsl/fragment.glsl';


const GrassMaterial = shaderMaterial(
{ bladeHeight: 1, map: null, alphaMap: null, time: 0, wireframe: false, lights: false },
vertexShader, fragmentShader,
(self) => {
  self.side = THREE.DoubleSide
},
)

extend({ GrassMaterial })