import * as THREE from 'three';

const simplex = new SimplexNoise(Math.random);

import SimplexNoise from 'simplex-noise';

function getAttributeData(instances, width) {
  const offsets = []
  const orientations = []
  const stretches = []
  const halfRootAngleSin = []
  const halfRootAngleCos = []
  const colors = []

  let quaternion_0 = new THREE.Vector4();
  let quaternion_1 = new THREE.Vector4();

  //min max angle for grouwth direction(radians)
  const min = -0.25;
  const max = 0.25;

  for (let i = 0; i < instances; i ++) {
    //Offset roots
    const offsetX = Math.random() * width - width / 2;
    const offsetZ = Math.random() * width - width / 2;
    const offsetY = getYPosition(offsetX, offsetZ)
    offsets.push(offsetX, offsetY, offsetZ);

    colors.push(Math.random(), Math.random(), Math.random());

    //Define random growth directions
    //Rotate around Y
    let angle = Math.PI - Math.random() * (2 * Math.PI);
    halfRootAngleSin.push(Math.sin(0.5 * angle));
    halfRootAngleCos.push(Math.cos(0.5 * angle));

    let RotationAxis = new THREE.Vector3(0, 1, 0)
    let x = RotationAxis.x * Math.sin(angle / 2.0)
    let y = RotationAxis.y * Math.sin(angle / 2.0)
    let z = RotationAxis.z * Math.sin(angle / 2.0)
    let w = Math.cos(angle / 2.0)
    quaternion_0.set(x, y, z, w).normalize();

    //Rotate around X
    angle = Math.random() * (max - min) + min
    RotationAxis = new THREE.Vector3(1, 0, 0);
    x = RotationAxis.x * Math.sin(angle / 2.0)
    y = RotationAxis.y * Math.sin(angle / 2.0)
    z = RotationAxis.z * Math.sin(angle / 2.0)
    w = Math.cos(angle / 2.0)
    quaternion_1.set(x, y, z, w).normalize();

    //combine rotations to single quaternion
    quaternion_0 = mutiplyQuaternions(quaternion_0, quaternion_1);
    
    //Rotate around Z
    angle = Math.random() * (max - min) + min
    RotationAxis = new THREE.Vector3(0, 0, 1);
    x = RotationAxis.x * Math.sin(angle / 2.0)
    y = RotationAxis.y * Math.sin(angle / 2.0)
    z = RotationAxis.z * Math.sin(angle / 2.0)
    w = Math.cos(angle / 2.0)
    quaternion_0.set(x, y, z, w).normalize();


    //combine rotations to single quaternion
    quaternion_0 = mutiplyQuaternions(quaternion_0, quaternion_1);

    orientations.push(quaternion_0.x, quaternion_0.y, quaternion_0.z, quaternion_0.w);

    //Define variety in height
    if (i < instances / 3) {
      stretches.push(Math.random() * 1.8)
    } else {
      stretches.push(Math.random())
    }
  }

  return {
    offsets,
    orientations,
    stretches,
    halfRootAngleCos,
    halfRootAngleSin,
    colors,
  }
}

function mutiplyQuaternions(q1, q2) {
  const x = q1.x * q2.w + q1.y * q2.z - q1.z * q2.y + q1.w * q2.x
  const y = -q1.x * q2.z + q1.y * q2.w + q1.z * q2.x + q1.w * q2.y
  const z = q1.x * q2.y - q1.y * q2.x + q1.z * q2.w + q1.w * q2.z
  const w = -q1.x * q2.x - q1.y * q2.y - q1.z * q2.z + q1.w * q2.w
  return new THREE.Vector4(x, y, z, w)
}

function getYPosition(x, z) {
  var y = 2 * simplex.noise2D(x / 50, z / 50)
  y += 4 * simplex.noise2D(x / 100, z / 100)
  y += 0.2 * simplex.noise2D(x / 10, z / 10)
  return y
}

export {getAttributeData, mutiplyQuaternions, getYPosition}