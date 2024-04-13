import React, { StyleHTMLAttributes } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//sponsor imports
import Image1 from "next/image";
import Mulearn from "../sponsors/mulearn.svg";
import iedc from "../sponsors/iedc.svg";
import care from "../sponsors/CareStack.png";
import { useStore } from "@/utils/store";

export function Sponcer({
  style,
  adActive,
  setAd,
}: {
  adActive: boolean;
  style: any;
  setAd: (ad: boolean) => void;
}) {
  return (
    <div
      className={` flex justify-center items-center `}
      style={{
        width: adActive ? "100%" : "0",
        height: adActive ? "100%" : "0",
        transition: "all 0.5s",
      }}
    >
      <div className="m-1 -mt-20 w-full h-full">
        <h1 className="text-4xl flex justify-center items-center mb-12"></h1>
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(slide) => {
            console.log(slide.activeIndex);
            let timeout = 0;
            if (slide.activeIndex == 0 && adActive) {
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                // setAd(false);
              }, 5000);
            }
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
              <div className="bg-transparent py-40  rounded-lg flex justify-center items-center">
                <Image1
                  src={Mulearn}
                  alt="DEVFOLIO LOGO"
                  className="scale-150 w-1/3"
                />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" target="_blank" rel="noreferrer">
              <div className="bg-transparent py-40  rounded-lg flex justify-center items-center">
                <Image1 src={iedc} alt="image" className="scale-150" />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" target="_blank" rel="noreferrer">
              <div className="bg-transparent py-40  rounded-lg flex justify-center items-center">
                <Image1 src={care} alt="image" className="scale-125" />
              </div>
            </a>
          </SwiperSlide>
        </Swiper> */}
        <div className="flex justify-around items-center m-12">
          <Image1 src={Mulearn} alt="DEVFOLIO LOGO" className="w-1/3 m-2" />
          <Image1 src={care} alt="image" className="w-1/3 h-min m-2" />
          <Image1 src={iedc} alt="image" className="w-1/5 m-2" />
        </div>
      </div>
    </div>
  );
}
