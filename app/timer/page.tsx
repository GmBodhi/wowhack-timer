// import Image from "next/image";
"use client";

import Digits from "@/components/digits";
import {
  Box,
  GradientTexture,
  GradientType,
  Plane,
  Text,
  Image,
  Text3D,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
  BufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  NormalBufferAttributes,
  PlaneGeometry,
  Material,
  Object3DEventMap,
} from "three";

import Devfolio from "../../sponsors/Devfolio.svg";
import Sponsors from "@/app/sponsors/page";

const START_TIME = new Date("April 13, 2024 10:00:00 GMT+0530");
const END_TIME = new Date("April 14, 2024 10:00:00 GMT+0530");

export default function Home() {
  // Create hour, minute, second, and millisecond till next day

  const [time, setTime] = useState(0);
  const isStarted = useRef(false);

  const plane =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  const day = "" + Math.floor(time / 86400000);
  const hour = "" + Math.floor((time % 86400000) / 3600000);
  const minute = "" + Math.floor((time % 3600000) / 60000);
  const second = "" + Math.floor((time % 60000) / 1000);

  console.log(Devfolio);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the time every 1000ms
      let time = START_TIME.getTime() - new Date().getTime();

      if (time < 0) {
        if (!isStarted.current) {
          isStarted.current = true;
        }
        time = END_TIME.getTime() - new Date().getTime();
      }
      setTime(time);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-screen h-screen">
          <div className="blob"></div>
      <Canvas>
        {/* <Plane args={[8, 6]} position={[0, 0, -2]} ref={plane} /> */}

        {/* Prefix */}
        <Text position={[0, -1.5, 0]} fontSize={0.7}>
          {isStarted.current
            ? "Time is ticking..."
            : "get yourself registered!".toLocaleUpperCase()}
          <meshBasicMaterial color="#5681c8"></meshBasicMaterial>
        </Text>

        {/* Digits */}
        <Digits position={[-4.5, 0, 0]}>
          {hour ? `${hour.padStart(2, "0")}h` : ""}
        </Digits>
        <Digits position={[0, 0, 0]}>
          {minute ? `${minute.padStart(2, "0")}m` : ""}
        </Digits>
        <Digits position={[4.5, 0, 0]}>
          {second ? `${second.padStart(2, "0")}s` : ""}
        </Digits>
      </Canvas>
    </div>
  );
}
