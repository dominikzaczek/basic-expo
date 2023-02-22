import React, { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
export default function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01))

  // Return the view, these are regular Threejs elements expressed in JSX
  // ref.current.rotation.x -= 0.01
  // const texturesy = useTexture(
  //   {
  //     map: "/textures/Floor/wood_cabinet_worn_long_diff_4k.jpg",
  //     displacementMap: "/textures/Floor/wood_cabinet_worn_long_disp_4k.png",
  //     normalMap: "/textures/Floor/wood_cabinet_worn_long_nor_gl_4k.png",
  //     roughnessMap: "/textures/Floor/wood_cabinet_worn_long_rough_4k.png",
  //     aoMap: "/textures/Floor/wood_cabinet_worn_long_ao_4k.jpg",
  //   },
  //   (map, displacementMap, normalMap, roughnessMap, aoMap) => {
  //     map.wrapT = map.wrapS = THREE.RepeatWrapping;
  //     displacementMap.wrapT = displacementMap.wrapS = THREE.RepeatWrapping;
  //     normalMap.wrapT = normalMap.wrapS = THREE.RepeatWrapping;
  //     roughnessMap.wrapT = roughnessMap.wrapS = THREE.RepeatWrapping;
  //     aoMap.wrapT = aoMap.wrapS = THREE.RepeatWrapping;
  //   }
  // );

  return (
    <mesh {...props} position={[0, -1.2, 3]} ref={ref} scale={0.1}>
      <boxGeometry args={[350, 1, props.exhibitors * 30, 2, 2, 2]} />
      <meshStandardMaterial
        roughness={1}
        scale={0.3}
        // {...texturesy}
        // aoMap={aoMap}
      />
    </mesh>
  );
}
