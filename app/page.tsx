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

import Devfolio from "../sponsors/Devfolio.svg";


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
          if (plane.current)
            plane.current.material = new MeshBasicMaterial({
              color: new Color(0xff0000),
            });
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
    </div>
  );
}
