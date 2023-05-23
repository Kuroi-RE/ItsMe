import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./components/Utilities/Button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Space = () => {
  return (
    <div className="h-screen container mx-auto tracking-wide flex gap-11 flex-col items-start justify-center py-24 text-black dark:text-white">
      <div>
        <h1 className="font-bold uppercase text-3xl">my space</h1>
      </div>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-full mySwiper card"
        >
          <SwiperSlide>
            <div className="flex flex-col my-4 mb-9 gap-6 text-center justify-center text-white">
              <div className="flex justify-center">
                <div className=" px-11 bg-gray-500 rounded-xl">
                  <img
                    className="h-40 rounded-lg"
                    srcSet="https://i.ebayimg.com/00/s/MTAyNFgxMDI0/z/k0sAAOSwODFaYS9p/$_86.JPG"
                    alt="laptop"
                  />
                </div>
              </div>
              <div className="flex flex-col mx-1">
                <h1 className="font-bold text-xl">LAPTOP</h1>
                <p>
                  ASUS X550C INTEL I5 RAM 12GB / HDD 500GB & SSD 128GB WINDOWS
                  10 PRO
                </p>
              </div>
              <div>
                <Button
                  variant="dark"
                  size="lg"
                  className="font-semibold rounded-xl"
                >
                  <Link onClick={() => alert("Item not found in any platform")}>
                    Get Item <FontAwesomeIcon icon={faCompass} />
                  </Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col my-4 gap-6 mb-9 text-center justify-center text-white">
              <div className="flex justify-center">
                <div className=" px-11 bg-gray-500 rounded-xl">
                  <img
                    className="h-40 rounded-lg"
                    srcSet="https://i.ebayimg.com/00/s/MTAyNFgxMDI0/z/k0sAAOSwODFaYS9p/$_86.JPG"
                    alt="laptop"
                  />
                </div>
              </div>
              <div className="flex flex-col mx-1">
                <h1 className="font-bold text-xl">KEYBOARD</h1>
                <p>
                  GAMEN TITAN ELITE II MECHANICAL KEYBOARD PLUGGABLE SWITCH BLUE
                </p>
              </div>
              <div>
                <Button
                  variant="dark"
                  size="lg"
                  className="font-semibold rounded-xl"
                >
                  <Link to="https://vt.tiktok.com/ZSLd79hp4/">
                    Get Item <FontAwesomeIcon icon={faCompass} />
                  </Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Space;
