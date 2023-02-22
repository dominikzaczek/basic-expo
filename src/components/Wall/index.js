import { Mask } from "@react-three/drei";
import React, { useRef, useState } from "react";

export default function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01))

  // Return the view, these are regular Threejs elements expressed in JSX
  // ref.current.rotation.x -= 0.01
  return (
    <group>
      <Mask id={1}>
        <planeGeometry />
      </Mask>
      <mesh {...props} ref={ref} scale={1}>
        <boxGeometry args={props.sizes} />
        <meshStandardMaterial
          map={props.texture}
          color={props.texture ? null : "black"}
        />
      </mesh>
    </group>
  );
}
