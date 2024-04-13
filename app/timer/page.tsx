// import Image from "next/image";
"use client";

import Digits from "@/components/digits";
import { redirect } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { use, useEffect, useRef, useState } from "react";

import Devfolio from "../../sponsors/Devfolio.svg";

//sponsor imports
import Image1 from "next/image";
import GDSC from "@/sponsors/image.png";

import { Sponcer } from "@/components/Sponcer";
import { useStore } from "@/utils/store";

const START_TIME = new Date("April 13, 2024 10:00:00 GMT+0530");
const END_TIME = new Date("April 14, 2024 10:00:00 GMT+0530");

export default function Home() {
  // Create hour, minute, second, and millisecond till next day

  const [time, setTime] = useState(0);
  const isStarted = useRef(false);

  // const [adActive, setAdActive] = useState(false);

  const adActive = useStore((state) => state.adActive);
  const setAdActive = useStore((state) => state.setAdActive);

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

    return () => [interval].forEach(clearInterval);
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      useStore.setState({ adActive: true });
      // console.log(adActive);
    }, 60 * 1000);

    return () => clearInterval(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`w-screen h-screen overflow-x-hidden overflow-y-hidden`}>
      <Image1
        src={GDSC}
        alt="DEVFOLIO LOGO"
        className="w-[30rem] my-16 py-5 pt-12 relative left-1/2 -translate-x-1/2"
      />

      {/* <Sponcer style={{}} adActive={adActive} setAd={setAdActive} /> */}
      {/* <div>
        {isStarted.current ? "Time is ticking..." : "Time is ticking..."}
      </div> */}
      <div className=" text-white absolute text-gradient font-normal left-1/2 top-1/2 mt-44 -translate-y-1/2 -translate-x-1/2 w-min">
        <div className={""}>
          <h1 className="inline p-4 rounded-2xl m-3 text-[12rem]">
            {hour ? `${hour.padStart(2, "0")}h` : ""}
          </h1>
          <h1 className="inline p-4 rounded-2xl m-3 text-[12rem]">
            {minute ? `${minute.padStart(2, "0")}m` : ""}
          </h1>
          <h1 className="inline p-4 rounded-2xl m-3 text-[12rem]">
            {second ? `${second.padStart(2, "0")}s` : ""}
          </h1>
        </div>
      </div>
      {/* <Canvas className="" style={{ height: adActive ? "0vh" : "100%" }}>

        <Text position={[0, -1.5, 0]} fontSize={0.7}>
          {isStarted.current
            ? "Time is ticking..."
            : "Time is ticking...".toLocaleUpperCase()}
          <meshBasicMaterial color="#5681c8"></meshBasicMaterial>
        </Text>

        <Digits position={[-4.5, 0, 0]}>
          {hour ? `${hour.padStart(2, "0")}h` : ""}
        </Digits>
        <Digits position={[0, 0, 0]}>
          {minute ? `${minute.padStart(2, "0")}m` : ""}
        </Digits>
        <Digits position={[4.5, 0, 0]}>
          {second ? `${second.padStart(2, "0")}s` : ""}
        </Digits>
      </Canvas> */}
    </div>
  );
}
