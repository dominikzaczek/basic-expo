import React, { useRef, useState } from "react";
import * as THREE from "three";

import AmbientMap from "./ambient.jpg";
import normalMap1 from "./normal.jpg";

const normalMap = new THREE.TextureLoader().load(normalMap1);
normalMap.wrapS = THREE.RepeatWrapping;
normalMap.wrapT = THREE.RepeatWrapping;

const ambientMap = new THREE.TextureLoader().load(AmbientMap);
ambientMap.wrapS = THREE.RepeatWrapping;
ambientMap.wrapT = THREE.RepeatWrapping;
ambientMap.repeat.set(4, 9);
export default function Ceiling(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  return (
    <>
      <mesh {...props} position={[12, 4, 0]} ref={ref} scale={0.1}>
        <boxGeometry args={[60, 10, props.exhibitors * 50]} />
        <meshStandardMaterial
          roughness={1}
          scale={0.3}
          normalMap={normalMap}
          map={ambientMap}
        />
      </mesh>
      <mesh {...props} position={[-7, 5, 0]} ref={ref} scale={0.1}>
        <boxGeometry args={[60, 10, props.exhibitors * 50]} />
        <meshStandardMaterial
          roughness={1}
          scale={0.3}
          normalMap={normalMap}
          map={ambientMap}
        />
      </mesh>
      <mesh {...props} position={[7, 5, 0]} ref={ref} scale={0.1}>
        <boxGeometry args={[60, 10, props.exhibitors * 50]} />
        <meshStandardMaterial
          roughness={1}
          scale={0.3}
          normalMap={normalMap}
          map={ambientMap}
        />
      </mesh>
      <mesh {...props} position={[-12, 4, 0]} ref={ref} scale={0.1}>
        <boxGeometry args={[60, 10, props.exhibitors * 50]} />
        <meshStandardMaterial
          roughness={1}
          scale={0.3}
          normalMap={normalMap}
          map={ambientMap}
        />
      </mesh>
    </>
  );
}
