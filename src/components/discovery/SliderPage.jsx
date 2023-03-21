import React from "react";
import Slider from "react-slick";
import{AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'

function NextArrow(props) {
  const {  style, onClick } = props;
  return  <button className={` p-4 rounded-full text-brand-color font-semibold bg-gray-50 absolute top-1/2 -translate-y-1/2 right-6 z-20`} style={style} onClick={onClick}><AiOutlineArrowRight size={24}/></button>;
}

function PrevArrow(props) {
  const {  style, onClick } = props;
  return <button className={'p-4 rounded-full text-brand-color font-semibold bg-gray-50 absolute top-1/2 -translate-y-1/2 left-6 z-20'} style={style} onClick={onClick}><AiOutlineArrowLeft size={24}/></button>;
}

const SliderPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  };
  return (
     <Slider className="my-8"  {...settings}>
         <div className="w-[602px] h-[381px] overflow-hidden rounded-xl px-2 ">
          <img
            className="w-full h-full object-cover hover:scale-101 overflow-hidden transition-all rounded-xl"
            src="https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/cea137ec-c494-11ed-ae76-7a336c2fedb2_c191109f_496e_4b53_9f69_e941476d768f.png"
            alt=""
          />
         
        </div>
        <div className="w-[602px] h-[381px] overflow-hidden rounded-xl px-2">
          <img
            className="w-full h-full object-cover hover:scale-101 overflow-hidden transition-all rounded-xl"
            src="https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/8985c55a-c31e-11ed-a65e-b61c94062312_dee335e1_419d_4bda_9277_9395b7af8820.png"
            alt=""
          />
        </div>

        <div className="w-[602px] h-[381px] overflow-hidden rounded-xl px-2 relative">
          <img
            className="w-full h-full object-cover hover:scale-101 overflow-hidden transition-all rounded-xl"
            src="https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/6fabb6a4-8dcb-11ed-b028-e6c9ff9985f5_a830071b_4831_4c5f_a8af_e47dcba2200b.png"
            alt=""
          />
           <h2 className="absolute bottom-16 left-8  text-white opacity-60 font-semibold text-xl">Hədiyyə Kartı</h2>
           <p className="absolute bottom-6 left-8 text-white font-semibold text-3xl">Wolt Hədiyyə Kartları</p>
        </div>

        <div className="w-[602px] h-[381px] overflow-hidden rounded-xl px-2 relative">
          <img
            className="w-full h-full object-cover hover:scale-101 overflow-hidden transition-all rounded-xl"
            src="https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/7ffa6b64-bf4d-11ed-ab97-56400f7aea10_5dc98a53_f0be_4295_bc3f_4929ac09c703.jpg"
            alt=""
          />
          <h2 className="absolute bottom-16 left-8  text-white opacity-60 font-semibold text-xl">Pidem</h2>
           <p className="absolute bottom-6 left-8 text-white font-semibold text-3xl">Bütün çatdırılma sifarişlərində 1₼ keşbek! 💸😋</p>
        </div>
    </Slider>
  );
};

export default SliderPage;
