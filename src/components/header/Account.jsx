import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

const Account = () => {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(!modal);
    document.body.style.overflow = "hidden";
    // document.body.style.backgroundColor = "#18191780"
  }

  function closeModal() {
    setModal(false);
    document.body.style.overflow = "unset";
  }
  return (
    <>
      <div className="ml-auto gap-x-2 md:gap-x-4 py-2 hidden md:flex ">
        <button
          onClick={openModal}
          className="font-medium  md:text-xs lg:text-base"
        >
          Daxil ol
        </button>
        <button
          onClick={openModal}
          className="bg-brand-color text-white font-bold px-4 py-2 rounded-lg md:text-xs lg:text-base"
        >
          Qeydiyyatdan keçin
        </button>
      </div>

      {modal && (
        <div className="w-full h-[100vh] flex items-center justify-center absolute top-0 left-0 z-20 bg-[#18191780]">
          <div className="w-full md:max-w-[500px] lg:max-w-[550px] mx-2  min-h-36 flex flex-col gap-y-2 pt-[72px]   pb-2 px-4 bg-white rounded-2xl border-2 border-gray-200 relative">
            <h2 className="text-[2rem] font-semibold mb-1">
              Hesab yaradın və ya daxil olun
            </h2>
            <h5 className=" mb-4">
              Aşağıda daxil olun və ya yeni Wolt hesabı yaradın.
            </h5>

            <button className="h-[44px] lg:h-[54px] w-full px-4 flex justify-center items-center font-bold rounded-xl bg-white relative border-2 border-gray-300 hover:bg-gray-100">
              <FcGoogle
                className="absolute top-1/2 -translate-y-1/2 left-4"
                size={20}
              />
              Google ilə davam etmək
            </button>

            <button className="h-[44px] lg:h-[54px] w-full px-4 flex justify-center items-center font-bold rounded-xl bg-black  text-white relative border-2 border-gray-300 hover:opacity-90">
              <FaApple
                className="absolute top-1/2 -translate-y-1/2 left-4"
                size={20}
              />
              Apple ilə davam etmək
            </button>

            <button className="h-[44px] lg:h-[54px] w-full px-4 flex justify-center items-center font-bold rounded-xl  bg-blue-600  text-white relative border-2 border-gray-300 hover:opacity-90">
              <FaFacebook
                className="absolute top-1/2 -translate-y-1/2 left-4"
                size={20}
              />
              Facebook ilə davam etmək
            </button>

            {/* Separator */}
            <div className="flex items-center py-4">
              <span className="w-full h-[1px] bg-gray-300 block"></span>
              <span className="text-[0.875rem] opacity-80 flex-shrink-0 mx-2">və ya e-poçt ilə daxil olun</span>
              <span className="w-full h-[1px] bg-gray-300 block"></span>
            </div>

            <div className="h-[44px] lg:h-[54px] w-full relative flex flex-col gap-y-2 items-center border-2 border-gray-200 rounded-lg hover:border-brand-color">
              <input
                required
                type="email"
                className="h-full w-full text-sm lg:text-md px-4 pt-3 rounded-lg outline-brand-color peer"
              />
              <small className="absolute left-5 top-1/2 -translate-y-1/2 transition-all peer-valid:top-3 peer-focus:top-3 opacity-80">
                E-poçt
              </small>
            </div>

            <button className="h-[44px] lg:h-[54px] w-full px-4 my-4 flex justify-center items-center font-bold rounded-xl  bg-blue-500 hover:bg-blue-500   text-white relative border-2 border-gray-300 hover:opacity-90">
             
              Növbəti
            </button>

            <p className="text-xs md:text-sm opacity-70">
            Wolt-da şəxsi məlumatların emalı haqqında ətraflı öyrənmək üçün <span className="text-brand-color font-medium cursor-pointer">Wolt Məxfilik Aktı</span> daxil olun. Qeydiyyat zamanı sizə aid olan ölkə və dil seçimlərini etdikdən sonra Wolt hesabınızla bağlı yerli Məxfilik Bəyannaməsinə daxil ola bilərsiniz. Bu sayt hCaptcha tərəfindən qorunur. hCaptcha <span className="text-brand-color font-medium cursor-pointer">Privacy Policy</span> və <span className="text-brand-color font-medium cursor-pointer">Terms of Service</span> tətbiq edilir. 
            </p>

            <button
              onClick={closeModal}
              className="h-10 w-10 flex items-center justify-center cursor-pointer absolute top-3 right-3 text-2xl font-semibold bg-gray-300 rounded-full bg-opacity-75 hover:bg-opacity-90 transition-colors"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}

      {/* Menu Dropdown */}
      <div className="md:hidden  px-1 py-1  my-2 bg-gray-200 rounded-2xl cursor-pointer">
        <Menu>
          <Menu.Button className="flex items-center gap-x-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              <BiUserCircle size={20} />
            </span>
            <span>
              <AiOutlineDown />
            </span>
          </Menu.Button>
          <Menu.Items className="flex flex-col absolute -bottom-12 right-3 rounded-xl border-2 border-gray-200 bg-white z-20 outline-gray-300">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={openModal}
                  className={`${
                    active && "bg-gray-100"
                  } px-4 py-1 opacity-80 border-b-2 border-gray-300`}
                  href="/account-settings"
                >
                  Giriş edin və ya qeydiyyatdan keçin
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-gray-100"} px-4 py-1 opacity-80`}
                  href="/account-settings"
                >
                  Dil:Azərbaycan
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-gray-100"} px-4 py-1 opacity-80`}
                  href="/account-settings"
                >
                  Dəstək
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
};

export default Account;
