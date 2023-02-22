import "./App.css";
import * as THREE from "three";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Avatar";
import Floor from "./components/Floor";
import FloorTexture from "./components/Floor/map.jpeg";

import Wall from "./components/Wall";
import WallTexture from "./components/Wall/texture3.jpeg";

import Ceiling from "./components/Ceiling";
import Exhibitors from "./components/Exhibitors";

import mapsy from "./components/Ceiling/shanghai.hdr";
import { Backdrop, Cloud, OrbitControls, Sky } from "@react-three/drei";
export default function App() {
  const rayku = [
    "https://picsum.photos/id/145/400",
    "https://picsum.photos/id/111/400",
    "https://picsum.photos/id/69/400",
    "https://picsum.photos/id/146/600/300",
    "https://picsum.photos/id/147/200",
    "https://picsum.photos/id/148/200",
    "https://picsum.photos/id/149/200",
    "https://picsum.photos/id/100/200",
    "https://picsum.photos/id/99/200",
    "https://picsum.photos/id/30/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/id/145/400",
    "https://picsum.photos/id/111/400",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
  ];

  const floorTexture = new THREE.TextureLoader().load(FloorTexture);
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(4, 4);

  const wallTexture = new THREE.TextureLoader().load(WallTexture);
  wallTexture.wrapS = THREE.RepeatWrapping;
  wallTexture.wrapT = THREE.RepeatWrapping;
  wallTexture.repeat.set(36, 9);

  const shadow = new THREE.ShadowMaterial();
  shadow.opacity = 0.2;
  const scene = new THREE.Scene();

  // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

  // scene.add(directionalLight);

  const [camerka, setCamerka] = useState(30);
  const [exhibitors, setExhibitors] = useState(null);
  useEffect(() => {
    const fetchExhibitionData = async () => {
      const data = await fetch(
        process.env.API_URL
      );
      if (data.ok) {
        const json = await data.json();
        console.log("EXHIBITIOR", json);
        setExhibitors(json);
      }
    };
    fetchExhibitionData();
  }, []);

  console.log(camerka);

  if (!exhibitors) return "We are building the room for you";
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      style={{
        backgroundColor: "#111a21",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* <PointerLockControls /> */}
      <Cloud
        opacity={0.5}
        speed={0.1} // Rotation speed
        width={20} // Width of the full cloud
        depth={3} // Z-dir depth
        segments={13}
        color="white"
        position={[0, 20, -rayku.length]} // Number of particles
      />
      <Sky
        distance={450000}
        sunPosition={[20, 20, 0]}
        inclination={20}
        azimuth={180}
      // exposure={0}
      />
      <OrbitControls />
      {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={30} /> */}
      {/* <FirstPersonControls
        lookSpeed={0.015}
        movementSpeed={1.5}
        constrainVertical={false}
      /> */}
      {/* <fog color="white" near={1} far={1.5} /> */}
      <ambientLight intensity={0.1} />
      {/* <spotLight position={[0, 50, 150]} angle={0.03} penumbra={1} /> */}
      <pointLight position={[-10, -10, -10]} />
      <Ceiling texture={floorTexture} exhibitors={rayku.length} />
      <Exhibitors exhibitors={rayku} />
      {/* <Box position={[-.7, -0.8, -1]} /> */}
      <Model position={[0, -1.2, 1]} />
      {/* <Model position={[0, 0, 0]} /> */}
      <Floor texture={floorTexture} exhibitors={rayku.length * 2} />
      <Wall
        texture={wallTexture}
        sizes={[40, 5, 0.5]}
        position={[0, 1, -rayku.length * 2]}
      />
      // Back wall
      <Wall texture={wallTexture} sizes={[0.5, 5, 100]} position={[15, 1, 0]} />
      <Wall
        texture={wallTexture}
        sizes={[0.5, 5, 100]}
        position={[-15, 1, 0]}
      />
      {/* <Environment
        // background={false} // can be true, false or "only" (which only sets the background) (default: false)
        files="./components/Ceiling/shanghai.hdr"
        // path="/"
        // preset={"city"}
        scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
      /> */}
    </Canvas>
  );
}
