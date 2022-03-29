import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Geometry } from "three/examples/jsm/deprecated/Geometry"

import { useFrame, useLoader } from '@react-three/fiber';
import SimplexNoise from 'simplex-noise';

import './GrassMaterial';
import bladeDiffuse from '../../../assets/textures/blade_diffuse.jpeg'
import bladeAlpha from '../../../assets/textures/blade_alpha.jpeg';
import { getAttributeData, getYPosition } from '../../../utils/getAttributeData';




function Grass({options = {bw: 0.12, bH: 1, joints: 5}, width = 200, instances = 30000}) {
  const { bW, bH, joints } = options;
  const materialRef = useRef();

  const [texture, alphaMap] = useLoader(THREE.TextureLoader, [bladeDiffuse, bladeAlpha])


  const attributeData = useMemo(() => getAttributeData(instances, width), [instances, width]);
  const baseGeom = useMemo(() => new THREE.PlaneBufferGeometry(bW, bH, 1, joints).translate(0, bH / 2, 0), [options]);
  const groundGeo = useMemo(() => {
    const geo = new Geometry().fromBufferGeometry(new THREE.PlaneGeometry(width, width, 32, 32))
    geo.verticesNeedUpdate = true;
    geo.lookAt(new THREE.Vector3(0, 1, 0))
    for(let i = 0; i < geo.vertices.length; i++) {
      const v = geo.vertices[i]
      v.y = getYPosition(v.x, v.z)
    }
    geo.computeVertexNormals()
    return geo.toBufferGeometry()
  }, [width]);

  useFrame((state) => (materialRef.current.uniforms.time.value = state.clock.elapsedTime / 4))
  return(
    <>
      <mesh>
        <instancedBufferGeometry
          index={baseGeom.index}
          attributes-position={baseGeom.attributes.posiition}
          attributes-uv={baseGeom.attributes.uv}
        >
          <instancedBufferAttribute attachObject={['attributes', 'offset']} args={[new Float32Array(attributeData.offsets), 3]} />
          <instancedBufferAttribute attachObject={['attributes', 'orientation']} args={[new Float32Array(attributeData.orientations), 4]} />
          <instancedBufferAttribute attachObject={['attributes', 'stretch']} args={[new Float32Array(attributeData.stretches), 1]} />
          <instancedBufferAttribute attachObject={['attributes', 'offset']} args={[new Float32Array(attributeData.offsets), 3]} />
          <instancedBufferAttribute attachObject={['attributes', 'halfRootAngleSin']} args={[new Float32Array(attributeData.halfRootAngleSin), 1]} />
          <instancedBufferAttribute attachObject={['attributes', 'halfRootAngleCos']} args={[new Float32Array(attributeData.halfRootAngleCos), 1]} />
          <instancedBufferAttribute attachObject={['attributes', 'color']} args={[new Float32Array(attributeData.color), 3]} />
        </instancedBufferGeometry>
        <grassMaterial ref={materialRef} map={texture} alphaMap={alphaMap}/>
        <mesh geometry={groundGeo}>
          <meshStandardMaterial color='#000f00' />
        </mesh>
      </mesh>
    </>
  )
};

export default Grass;