import React, { useRef, useState, useEffect } from "react";
import { useFrame, Canvas, Group } from "@react-three/fiber";
import * as THREE from "three";
import { Shadow, Sparkles, Stars, useAspect } from "@react-three/drei";

import LeftWing from "./1.png";
import RightWing from "./2.png";

import Plant from "../../../objects/plants/pottedPlant/PottedPlant";

function SignPanel({ ref, props }) {
  const signTexture = new THREE.TextureLoader().load("./consultancy/sign.png");
  const signbaseTexture = new THREE.TextureLoader().load(
    "./signbase-placeholder.jpg"
  );

  return (
    <group position={[-2.8, 0, 1]}>
      <mesh
        ref={ref}
        position={[0, 0.05, 1]}
        // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
      >
        <boxGeometry args={[0.5, 0.5, 0.2]} />
        <meshStandardMaterial map={signTexture} />
      </mesh>
      <group>
        <mesh
          ref={ref}
          position={[0, -0.7, 1]}
          // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
        >
          <boxGeometry args={[0.5, 1, 0.2]} />
          <meshStandardMaterial map={signbaseTexture} />
        </mesh>
        <Sparkles />
      </group>
    </group>
  );
}

function StandFloor({ ref }) {
  const signTexture = new THREE.TextureLoader().load(
    "./signbase-placeholder.jpg"
  );
  return (
    <mesh
      ref={ref}
      position={[0, -1.1, 1]}
      // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
    >
      <boxGeometry args={[5.5, 0.1, 2.5]} />
      <meshStandardMaterial map={signTexture} />
    </mesh>
  );
}
export default function Box(props) {
  console.log("JOJLA", props);
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  //   useFrame((state, delta) => (ref.current.rotation.y += 0.005));

  // Return the view, these are regular Threejs elements expressed in JSX
  // ref.current.rotation.x -= 0.01
  const standTexture = new THREE.TextureLoader().load(
    "./stand-placeholder.jpg"
  );
  const texture1 = new THREE.TextureLoader().load(
    "./consultancy/images/walls_01.jpg"
  );
  const texture2 = new THREE.TextureLoader().load(
    "./consultancy/images/walls_02.jpg"
  );
  const texture3 = new THREE.TextureLoader().load(
    "./consultancy/images/walls_03.jpg"
  );
  const texture4 = new THREE.TextureLoader().load(
    "./consultancy/images/walls_04.jpg"
  );
  const texture5 = new THREE.TextureLoader().load(
    "./consultancy/images/walls_033.jpg"
  );
  const logoTexture = new THREE.TextureLoader().load(props.textures.logoUrl);

  return (
    <>
      <group {...props}>
        <pointLight args={["white", 2, 4]} position={[0, 0, 1]} />
        <mesh
          ref={ref}
          position={[0, 1, 0.2]}
          // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
        >
          <boxGeometry args={[1, 0.5, 0.05]} />
          <meshStandardMaterial map={logoTexture} />
        </mesh>
        <mesh
          ref={ref}
          position={[-2.1, 0, 0]}
          // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
        >
          <boxGeometry args={[1, 2.5, 0.2]} />
          <meshStandardMaterial map={texture1} />
        </mesh>
        <mesh
          ref={ref}
          position={[-1, 0, 0]}
          // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
        >
          <boxGeometry args={[1, 2.5, 0.2]} />
          <meshStandardMaterial map={texture2} />
        </mesh>
        <mesh
          ref={ref}
          position={[0, 0, 0]}
          // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
        >
          <boxGeometry args={[1, 2.5, 0.2]} />
          <meshStandardMaterial map={texture5} />
        </mesh>
        <mesh
          ref={ref}
          position={[1, 0, 0]}
          // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
        >
          <boxGeometry args={[1, 2.5, 0.2]} />
          <meshStandardMaterial map={texture3} />
        </mesh>
        <mesh
          ref={ref}
          position={[2.1, 0, 0]}
          // rotation={new THREE.Euler(0, -(Math.PI / 4), 0)}
        >
          <boxGeometry args={[1, 2.5, 0.2]} />
          <meshStandardMaterial map={texture4} />
        </mesh>
        <SignPanel ref={ref} standTexture={standTexture} />
        <StandFloor />
      </group>
    </>
  );
}
