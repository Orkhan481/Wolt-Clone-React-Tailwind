
import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BiCycling } from "react-icons/bi";
import Title from "./Title";
import PopularRestorans from "../../api/PopularRestorans.json";
import { Link } from "react-router-dom";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      className={` p-4 rounded-full text-brand-color font-bold bg-gray-100 hover:bg-blue-200 absolute -top-16 right-2 transition-all   z-20`}
      style={style}
      onClick={onClick}
    >
      <AiOutlineArrowRight size={24} />
    </button>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      className={
        "p-4 rounded-full text-brand-color font-bold bg-gray-100  hover:bg-blue-200 absolute -top-16 right-[70px] transition-all  z-20"
      }
      style={style}
      onClick={onClick}
    >
      <AiOutlineArrowLeft size={24} />
    </button>
  );
}

const PopularRestoranSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
            }
          },
         
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              arrows:false,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      };
  return (
    <div className="lg:p-8 p-2 lg:mx-4">
      <h2 className="mb-4 font-semibold text-lg md:text-xl lg:text-2xl">
        <Title>Populyar Restoranlar</Title>
      </h2>
      <Slider className="!px-0 !mx-0" {...settings}>
        {PopularRestorans.length &&
          PopularRestorans.map((restoran) => (
             <div className="px-2">
               <div className="!h-[270px] w-full overflow-hidden border-2 border-gray-200 rounded-2xl hover:scale-101 transition-all">
                <img className="w-full h-[220px] object-cover hover:scale-101" src={restoran.img} alt="" />
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-center pt-3">{restoran.restoranName}</h3>
              </div>
             </div>
          ))}
      </Slider>
    </div>
  );
};

export default PopularRestoranSlider;

