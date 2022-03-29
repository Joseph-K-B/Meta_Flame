precision mediump float;
uniform sampler2D map;
uniform sampler2D alphaMap;
uniform vec3 uLightDir;
varying vec2 vUv;
varying float frc;
varying vec3 vCol;
varying vec3 vPos;


void main() {
  //Get transparency information from alpha map
  float alpha = texture2D(alphaMap, vUv).r;
  //If transparent, don't draw
  if(alpha < 0.15) discard;
  //Get colour data from texture
  vec4 col = vec4(texture2D(map, vUv));
  //Add more green towards root
  col = mix(vec4(0.0, 0.6, 0.0, 1.0), col, frc);
  //Add a shadow towards root
  col = mix(vec4(0.0, 0.1, 0.0, 1.0), col, frc);

  // color out
  vec4 colOut = col;

  // lighting
  vec4 colLight = vec4( vec3(0.7647, 0.8392, 0.2431), 1.0);
  vec4 colDark = vec4( vec3(0.007647, 0.008392, 0.002431), 1.0);
  if (vPos.x > 0.0 || vPos.z > 0.0) {
    float amountLight = vUv.y * 0.5 * length(vec2(vPos.x, vPos.z));
    colOut = mix(col, colLight, amountLight);
  }

  // color grading
  colOut = mix(colOut, vec4(vCol, 1.0), vUv.y * 0.1);

  gl_FragColor = colOut; 
}