import { Mask, useTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";

export default function WallTwo(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01))

  // Return the view, these are regular Threejs elements expressed in JSX
  // ref.current.rotation.x -= 0.01

  const texturesy = useTexture(
    {
      map: "/textures/Glass/glass_clear_basecolor.png",
      normalMap: "/textures/Glass/glass_clear_normal.png",
      roughnessMap: "/textures/Glass/glass_clear_roughness.png",
      alphaMap: "/textures/Glass/glass_clear_height.png",
      metallicMap: "/textures/Glass/glass_clear_metallic.png",
    }
    // (map, displacementMap, normalMap, roughnessMap, aoMap) => {
    //   map.wrapT = map.wrapS = THREE.RepeatWrapping;
    //   displacementMap.wrapT = displacementMap.wrapS = THREE.RepeatWrapping;
    //   normalMap.wrapT = normalMap.wrapS = THREE.RepeatWrapping;
    //   roughnessMap.wrapT = roughnessMap.wrapS = THREE.RepeatWrapping;
    //   aoMap.wrapT = aoMap.wrapS = THREE.RepeatWrapping;
    // }
  );
  return (
    <group>
      <mesh {...props} ref={ref} scale={1} position={[-1.5, 1, 0]}>
        <boxGeometry args={[1.5, 5, 1]} />
        <meshStandardMaterial {...texturesy} />
      </mesh>
      <mesh {...props} ref={ref} scale={1} position={[1.5, 1, 0]}>
        <boxGeometry args={[1.5, 5, 1]} />
        <meshStandardMaterial
          map={props.texture}
          color={props.texture ? null : "yellow"}
        />
      </mesh>
    </group>
  );
}
