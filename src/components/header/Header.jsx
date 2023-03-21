import React, { useState } from "react";
import logo from "../../images/logo.svg";
import headerImage from "../../images/header.svg";
import { GrLocation } from "react-icons/gr";
import { BsChevronDown } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiFillCloseCircle,
  AiOutlineClose
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Account from "./Account";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [country, setCountry] = useState();
  const [info, setInfo] = useState();

  function openModal() {
    setModal(!modal);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModal(false);
    document.body.style.overflow = "unset";
  }

  const enable = country && info;
  return (
    <>
      <div className="md:h-[68px] h-full max-w-[1600px] mx-auto flex items-start md:items-center justify-between border-b-2  border-gray-200 px-1 md:px-4 relative">
        <div className="flex flex-col md:flex-row md:items-center">
          <Link to="/discovery">
            <img
              className="w-[100px] md:w-[120px] py-2 md:py-0"
              src={logo}
              alt=""
            />
          </Link>

          <div
            onClick={openModal}
            className="flex items-center md:gap-x-2 py-2 px-1 md:py-0 md:px-0 cursor-pointer"
          >
            {console.log(modal)}
            <div className="w-[50px] h-[40px] text-brand-color flex items-center justify-center rounded-full bg-[#009df014] hover:bg-blue-200">
              <GrLocation className="w-[15px]" size={20} />
            </div>

            <div className=" px-2 md:px-4">
              <p className="text-xs md:text-sm opacity-75">
                Kimə çatdırılacaq?
              </p>
              <h5 className="text-xs md:text-sm  font-semibold text-brand-color">
                Bakı
              </h5>
            </div>

            <div className="text-brand-color">
              <BsChevronDown size={16} />
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="w-[60%] ml-auto md:w-full flex items-center justify-between gap-x-2 px-4 pr-2 md:pl-8">
          <form className="h-[35px] md:h-[40px] w-[200px] md:w-[250px] md:mx-auto relative rounded-3xl bg-gray-400">
            <input
              type="text"
              required
              placeholder="Wolt-da axtarın..."
              className="h-full w-full text-sm font-medium rounded-3xl px-10 py-2.5 bg-gray-200 outline-brand-color placeholder-gray-500 peer"
            />
            <AiOutlineSearch
              className="absolute left-4 top-1/2 -translate-y-1/2"
              size={20}
            />
            <AiFillCloseCircle
              className="absolute right-4 top-1/2 -translate-y-1/2 hidden peer-valid:block"
              size={20}
            />
          </form>
          {/* Account */}
          <Account />
        </div>
      </div>
      {/* MODAL is here */}
      {modal && (
        <div className="w-full h-[100vh]  z-20 transition-all flex items-center justify-center absolute top-0 left-0 bg-[#18191780]">
          <div className="w-full md:max-w-[500px] lg:max-w-[550px] mx-2  min-h-36 flex flex-col gap-y-2 pt-[52px]  pb-4 px-4 bg-white rounded-2xl border-2 border-gray-200 relative">
            <h2 className="font-semibold pb-4 text-3xl">
              Yeni ünvan əlavə edin
            </h2>

            <div className="h-[50px] w-full relative flex flex-col gap-y-2 items-center border-2 border-gray-200 rounded-lg hover:border-brand-color">
              <small className="absolute left-5 top-1 ">Ölkə</small>
              <select
                className="h-full w-full px-4 pt-1.5 rounded-lg outline-brand-color peer"
                name=""
                id=""
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Azerbaycan</option>
                <option value="">Almaniya</option>
                <option value="">Cexiya</option>
              </select>
            </div>

            <div className="h-[50px] w-full relative flex flex-col gap-y-2 items-center border-2 border-gray-200 rounded-lg hover:border-brand-color">
              <input
                onChange={(e) => setInfo(e.target.value)}
                value={info}
                required
                type="text"
                className="h-full w-full px-4 pt-1.5 rounded-lg outline-brand-color peer"
              />
              <small className="absolute left-5 top-1/2 -translate-y-1/2 transition-all peer-valid:top-1 peer-focus:top-2.5">
                Küçənin adı və nömrəsi
              </small>
            </div>
            {console.log(info)}

            <button
              className={`w-full h-14 bg-brand-color opacity-50 ${
                enable ? "opacity-100" : ""
              } text-white rounded-lg`}
            >
              Davam Edin
              {console.log(enable)}
            </button>

            <img className="h-[330px]" src={headerImage} alt="" />
            <button
              onClick={closeModal}
              className="h-10 w-10 flex items-center justify-center cursor-pointer absolute top-3 right-3 text-2xl font-semibold bg-gray-300 rounded-full bg-opacity-75 hover:bg-opacity-90 transition-colors"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
