import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BiCycling } from "react-icons/bi";
import Title from "./Title";
import NovruzOffers from "../../api/NovruzOffers.json";
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

const NovruzSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows:true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
     
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
    <div className="md:p-8 p-2 relative">
      <h2 className="mb-4 pl-2 font-semibold text-lg md:text-2xl">
        <Title>Novruz bayramı təklifləri! 🤩</Title>
      </h2>
      <Slider {...settings}>
        {NovruzOffers.length &&
          NovruzOffers.map((offer) => (
            <div
              key={offer.id}
              className="w-full h-full py-4 px-2"
            >
              <div className="w-full h-[270px] overflow-hidden rounded-2xl hover:scale-105 transition-all  border-2 border-gray-200">
              <img
                className="h-[150px] w-full object-cover"
                src={offer.img}
                alt=""
              />

              <div className="h-full pt-3 relative">
                <h3 className="px-6 w-[70%] md:w-[90%] font-medium text-lg line-clamp-1">
                  {offer.productName}
                </h3>

                <p className="px-6 w-[70%] line-clamp-1">{offer.productOwner}</p>

                <div className="flex flex-col items-center absolute top-4 right-2 md:right-4 bg-blue-50 px-2 py-1 text-brand-color text-sm rounded-xl">
                  <span>{offer.time}</span>
                  <span className="opacity-75 text-xs">dəq</span>
                </div>

                <div className=" py-1 mt-5 border-t-2 border-gray-200 ">
                  <div className="flex gap-x-2 items-center px-6">
                    <span>
                      <BiCycling size={14} />
                    </span>
                    <span className="text-sm">AZN {offer.price}</span>
                    <span className="text-sm">$$$</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
      </Slider>{" "}
      <Link to="#" className="text-brand-color font-semibold text-sm md:text-base absolute md:top-8 top-3 right-4 md:right-32 md:-translate-x-1/2">Hamisina baxin</Link>
    </div>
  );
};

export default NovruzSlider;
