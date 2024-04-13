import React, { StyleHTMLAttributes } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//sponsor imports
import Image1 from "next/image";
import Mulearn from "../sponsors/mulearn.svg";
import iedc from "../sponsors/iedc_final_rm.png";
import care from "../sponsors/care resize.png";
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
      className={` flex justify-center items-center ${""}`}
      style={{
        width: adActive ? "100%" : "0",
        height: adActive ? "100%" : "0",
        transition: "all 0.5s",
      }}
    >
      <div
        className="m-1 -mb-4 md:w-[70%] h-full"
        style={{
          transform: adActive ? "scale(1)" : "scale(0)",
        }}
      >
        <h1 className="text-4xl flex justify-center items-center mb-12"></h1>
        <Swiper
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
            if (slide.activeIndex == 0 && adActive)
              setTimeout(() => {
                setAd(false);
              }, 5000);
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
              <div className="bg-white py-40  rounded-lg flex justify-center items-center">
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
              <div className="bg-white py-40  rounded-lg flex justify-center items-center">
                <Image1 src={iedc} alt="image" className="scale-150" />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" target="_blank" rel="noreferrer">
              <div className="bg-white py-40  rounded-lg flex justify-center items-center">
                <Image1 src={care} alt="image" className="scale-125" />
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
