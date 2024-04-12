import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//sponsor imports
import Image1 from 'next/image';
import Devfolio1 from "../sponsors/Devfolio.png"
import Polygon from '../sponsors/Polygon.png'
import ETHIndia from "../sponsors/ethindia.png"
import iedc from "../sponsors/iedc_final_rm.png"
import care from "../sponsors/care resize.png"

export const Sponcer = () => {
  return (
    <div className=" w-full flex justify-center items-center">
    <div className="m-3 md:w-[70%]">
    <h1 className="text-4xl flex justify-center items-center mb-12">Our Sponsors</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
              <div className="bg-white p-5 rounded-lg flex justify-center items-center">
                <Image1 src={Devfolio1} alt="DEVFOLIO LOGO" />
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" target="_blank" rel="noreferrer">
              <div className="bg-white p-5 rounded-lg flex justify-center items-center">
                <Image1 src={Polygon} alt="image" />
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" target="_blank" rel="noreferrer">
              <div className="bg-white p-5 rounded-lg flex justify-center items-center">
                <Image1 src={ETHIndia} alt="image" />
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" target="_blank" rel="noreferrer">
              <div className="bg-white p-5 rounded-lg flex justify-center items-center">
                <Image1 src={iedc} alt="image" />
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" target="_blank" rel="noreferrer">
              <div className="bg-white p-5 rounded-lg flex justify-center items-center">
                <Image1 src={care} alt="image" />
              </div>
          </a>
        </SwiperSlide>
        
      </Swiper>
      </div>
      </div>
  )
}
