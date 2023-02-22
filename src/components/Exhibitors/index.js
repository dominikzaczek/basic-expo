import React from "react";

import Stand from "./Stand";
import * as THREE from "three";

export default function Exhibitors({ exhibitors }) {
  const texture = new THREE.TextureLoader().load(exhibitors[0]);

  return exhibitors.map((boxie, i) => {
    const ferrero =
      i === 1 ? exhibitors.length * 1.3 : exhibitors.length * 1.3 - i * 5;
    const texture = new THREE.TextureLoader().load(boxie);

    // Rotate the stand
    const rotationAngle = i % 2 === 0 ? -(Math.PI / 15) : Math.PI / 15;
    return (
      <Stand
        textures={boxie}
        position={[i % 2 === 0 ? 7 : -7, 0, ferrero]}
        rotation={new THREE.Euler(0, rotationAngle, 0)}
      />
    );
  });
}
