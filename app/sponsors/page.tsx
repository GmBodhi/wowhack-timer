import React from 'react'
import Image from 'next/image';
import Devfolio from "../../sponsors/Devfolio.png"
import Polygon from '../../sponsors/Polygon.png'
import ETHIndia from "../../sponsors/ethindia.png"

export const Sponsors = () => {
  return (
    <div className="h-screen  w-full flex justify-center items-center">
            <div className="m-3 md:w-[70%]">
                <h1 className="text-4xl mb-12">Our Sponsors</h1>
                <div className="">
                    {/* Make a grid like panel 2 in a row and place a few logos */}
                    <div className="grid grid-cols-2 gap-10">
                        <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
                            <div className="bg-white p-5 rounded-lg flex justify-center items-center">
                                <Image src={Devfolio} alt="DEVFOLIO LOGO" />
                            </div>
                        </a>
                        <a href="https://polygon.technology/" target="_blank" rel="noreferrer">
                            <div className="bg-white p-5 rounded-lg flex justify-center items-center">
                                <Image src={Polygon} alt="POLYGON LOGO" />
                            </div>
                        </a>
                        <a href="https://ethindia.co/" target="_blank" rel="noreferrer">
                            <div className="bg-white p-5 rounded-lg flex justify-center items-center">
                                <Image src={ETHIndia} alt="ETHINDIA LOGO" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}


export default Sponsors;
