import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import {
  Environment,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Exhibitors from "./components/Exhibitors";
import WallTwo from "./components/WallTwo";
import Wall from "./components/Wall";
import WallTexture from "./components/Wall/texture3.jpeg";

// import Car from './Car'

export default function App() {
  const [exhibitors, setExhibitors] = useState(null);

  const wallTexture = new THREE.TextureLoader().load(WallTexture);
  wallTexture.wrapS = THREE.RepeatWrapping;
  wallTexture.wrapT = THREE.RepeatWrapping;
  wallTexture.repeat.set(36, 9);

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

  if (!exhibitors) return "We are building the room for you";
  const exs = exhibitors.data;

  return (
    <Canvas
      gl={{ toneMappingExposure: 0.7 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Suspense fallback={null}>
        <Environment
          files="/textures/shanghai.hdr"
          ground={{ height: 20, radius: 130 }}
        />
        <spotLight angle={1} position={[-80, 200, -100]} intensity={1} />
        <ContactShadows
          renderOrder={2}
          frames={1}
          resolution={1024}
          scale={120}
          blur={2}
          opacity={0.6}
          far={100}
        />
        <Exhibitors exhibitors={exhibitors.data} />
        <WallTwo position={[0, 3, 0]} texture={wallTexture} /> */}
        <Wall
          texture={wallTexture}
          sizes={[0.5, 5, exs.length * 8]}
          position={[15, 1, 0]}
        />
        <Wall
          texture={wallTexture}
          sizes={[0.5, 5, exs.length * 8]}
          position={[-15, 1, 0]}
        />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
      />
      <PerspectiveCamera makeDefault position={[-30, 100, 120]} fov={35} />
    </Canvas>
  );
}
