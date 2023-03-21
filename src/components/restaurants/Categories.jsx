



import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Title from "components/discovery/Title";
import CategoriesData from "../../api/Categories.json";

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

const Categories = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 6,
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
              slidesToScroll: 3,
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
    <div className="py-6">
      <h2 className="mb-4 font-semibold text-lg md:text-xl lg:text-2xl">
        <Title>Populyar Restoranlar</Title>
      </h2>
      <Slider className="!px-0 !mx-0 py-2" {...settings}>
        {CategoriesData.length &&
          CategoriesData.map((category) => (
             <div className="px-2" key={category.id}>
               <div className="!h-[290px] w-full overflow-hidden border-2 border-gray-200 rounded-2xl hover:scale-101 transition-all">
                <img className="w-full h-[220px] object-cover hover:scale-101" src={category.img} alt="" />
                <div className="h-[70px] px-4 py-2" >
                <h3 className="text-sm md:text-lg lg:text-[1.125rem] font-semibold">{category.categoryName}</h3>
                <p className="text-[0.875rem]">{category.categoryNumber}</p>
                </div>
              </div>
             </div>
          ))}
      </Slider>
    </div>
  );
};

export default Categories;

