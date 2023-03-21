import React,{useState} from "react";
import logo from "../../src/images/logo.svg";
import { ImLocation } from "react-icons/im";
import { BsGlobeAsiaAustralia, BsEyeSlashFill } from "react-icons/bs";
import {AiOutlineDown } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const Footer = () => {
  const [openText,setOpenText] = useState(false)

  const handleClick = (event) => {
    setOpenText((openText) => !openText);
  };
  return (
    <div className=" bg-[#141414]  text-white">
      <div className="lg:pt-[104px] pt-[30px] pb-[30px] lg:px-[30px] lg:pb-[104px] flex flex-col lg:flex-row justify-between">
        <div className="w-[30%] flex flex-col gap-y-4 items-start pl-2">
          <img className="h-10 pointer-events-none" src={logo} alt="" />
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            <Link>
              <img
                className="h-10 w-[156px]"
                src="https://consumer-static-assets.wolt.com/app-store-badges/Download_on_the_App_Store_Badge_AZ_RGB_blk_100517.svg"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="h-10 w-[134px]"
                src="https://consumer-static-assets.wolt.com/app-store-badges/google-play-badge_az.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="w-[100%] lg:w-[70%] flex-col lg:flex-row flex-1 justify-between gap-x-4 gap-y-4 lg:px-24 py-6">
      <div className="block lg:hidden">
        {/* 1 */}
      <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%]  flex items-center justify-between r p-2  text-left text-sm font-semibold hover:bg-[#303030] px-4"
              >
                {({ active }) => (
                  <>
                     Gəlin, birlikdə edək
              
                     { !open && (
                           <AiOutlineDown
                           size={16}
                         />
                      )}
                    
                     { open && (
<AiOutlineDown className="rotate-180"  size={16}/>
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%]  py-2 px-2  mb-2 bg-[#303030] text-sm lg:text-[1.125rem]">
                    <Menu.Items>
                      <p>
                      Kuryerlər üçün
                      </p>
                    </Menu.Items>
                    
                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                          Restoranlar üçün
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                       Mağazalar üçün
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                          Şirkətlər üçün
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                         Wolt Drive
                        </a>
                      )}
                    </Menu.Items>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
        {/* 2 */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%]  flex items-center justify-between r p-2  text-left text-sm font-semibold hover:bg-[#303030] px-4"
              >
                {({ active }) => (
                  <>
                      Company
              
                     { !open && (
                           <AiOutlineDown
                           size={16}
                         />
                      )}
                    
                     { open && (
<AiOutlineDown className="rotate-180"  size={16}/>
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%]  py-2 px-2  mb-2 bg-[#303030] text-sm lg:text-[1.125rem]">
                    <Menu.Items>
                      <p>
                      Haqqımızda
                      </p>
                    </Menu.Items>
                    
                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                         İşlər
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                       Məsuliyyət
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                         Təhlükəsizlik
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                        İnvestorlar
                        </a>
                      )}
                    </Menu.Items>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
        {/* 3 */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%]  flex items-center justify-between r p-2  text-left text-sm font-semibold hover:bg-[#303030] px-4"
              >
                {({ active }) => (
                  <>
                       Useful links
              
                     { !open && (
                           <AiOutlineDown
                           size={16}
                         />
                      )}
                    
                     { open && (
<AiOutlineDown className="rotate-180"  size={16}/>
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%]  py-2 px-2  mb-2 bg-[#303030] text-sm lg:text-[1.125rem]">
                    <Menu.Items>
                      <p>
                      Dəstək
                      </p>
                    </Menu.Items>
                    
                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                        Media
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                      Əlaqə
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                         Speak up
                        </a>
                      )}
                    </Menu.Items>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
        {/* 4 */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%]  flex items-center justify-between r p-2  text-left text-sm font-semibold hover:bg-[#303030] px-4"
              >
                {({ active }) => (
                  <>
                       Follow us
              
                     { !open && (
                           <AiOutlineDown
                           size={16}
                         />
                      )}
                    
                     { open && (
<AiOutlineDown className="rotate-180"  size={16}/>
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%]  py-2 px-2  mb-2 bg-[#303030] text-sm lg:text-[1.125rem]">
                    <Menu.Items>
                      <p>
                      Wolt bloq
                      </p>
                    </Menu.Items>
                    
                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                       Mühəndislik bloqu
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                     Instagram
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                       Facebook
                        </a>
                      )}
                    </Menu.Items>

                    <Menu.Items>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                       LinkedIn
                        </a>
                      )}
                    </Menu.Items>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
      </div>

          <div className=" grid grid-cols-4">
          <div className="hidden lg:block">
            <h3 className="mb-6 font-medium opacity-70 pointer-events-none">
              Gəlin, birlikdə edək
            </h3>
            <ul className="flex flex-col gap-2 text-sm ">
              <Link className="hover:underline">Kuryerlər üçün</Link>
              <Link className="hover:underline">Restoranlar üçün</Link>
              <Link className="hover:underline">Mağazalar üçün</Link>
              <Link className="hover:underline">Şirkətlər üçün</Link>
              <Link className="hover:underline">Wolt Drive</Link>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-6 font-medium opacity-70 pointer-events-none">
              Company
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <Link className="hover:underline">Haqqımızda</Link>
              <Link className="hover:underline">İşlər</Link>
              <Link className="hover:underline">Məsuliyyət</Link>
              <Link className="hover:underline">Təhlükəsizlik</Link>
              <Link className="hover:underline">İnvestorlar</Link>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-6 font-medium opacity-70 pointer-events-none">
              Useful links
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <Link className="hover:underline">Dəstək</Link>
              <Link className="hover:underline">Media</Link>
              <Link className="hover:underline">Əlaqə</Link>
              <Link className="hover:underline">Speak up</Link>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-6 font-medium opacity-70 pointer-events-none">
              Follow us
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <Link className="hover:underline">Wolt bloq</Link>
              <Link className="hover:underline">Mühəndislik bloqu</Link>
              <Link className="hover:underline">Instagram</Link>
              <Link className="hover:underline">Facebook</Link>
              <Link className="hover:underline">Twitter</Link>
              <Link className="hover:underline">LinkedIn</Link>
            </ul>
          </div>
          </div>

        </div>
      </div>

      {/* Language and terms */}
      <div className="flex flex-col gap-y-4 lg:flex-row justify-between Items-center pb-20 px-2 lg:pb-2 lg:px-10 ">
        {/* Language */}
        <div className="flex gap-x-4 items-center text-xs">
          <Link className="flex gap-x-2 Items-center hover:underline">
            <ImLocation size={18} />
            Azərbaycan
          </Link>

          <Link className="flex gap-x-2 items-center text-xs hover:underline">
            <BsGlobeAsiaAustralia size={18} />
            Azerbaijani
          </Link>

          <Link className="flex gap-x-2 items-center text-xs hover:underline">
            <BsEyeSlashFill size={18} />
            Əlçatanlıq
          </Link>
        </div>
        {/* Terms */}
        <div className="flex gap-x-8 Items-center">
          <ul className="flex gap-x-4 Items-center text-xs">
            <Link className="hover:underline">Əlçatanlıq Bəyanatı</Link>
            <Link className="hover:underline">Şərtlər və Qaydalar</Link>
            <Link className="hover:underline">Gizlilik Siyasəti</Link>
          </ul>
          <h4 className="hidden lg:block text-xs">This clone created by Orkhan©2023</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
