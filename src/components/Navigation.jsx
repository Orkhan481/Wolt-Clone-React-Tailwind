import React from "react";
import { NavLink } from "react-router-dom";
import { RiBaseStationFill, RiRestaurantFill } from "react-icons/ri";
import {SlBasketLoaded} from 'react-icons/sl'

const Navigation = () => {
  return (
    <div className="h-[48px] lg:h-[88px] text-xs lg:text-base container mx-auto flex items-center justify-center gap-x-4 pt-4 bg-white">
      <div className="flex items-center gap-x-2">
        <NavLink
        // 
         className={( {isActive}) => isActive ? "h-9 flex items-center gap-x-1.5 px-4  bg-brand-color text-white rounded-3xl text-[0.875rem]" : "bg-white text-black h-9 flex items-center gap-x-1.5 px-4 rounded-3xl transition-all hover:shadow-md font-semibold text-opacity-50 text-[0.875rem]"
       }
     
          to="/discovery"
        >
          
          <RiBaseStationFill size={20} />
          Kəşf Et
        </NavLink>

        <NavLink  className={( {isActive}) => isActive ? "h-9 flex items-center gap-x-1.5 px-4  bg-brand-color text-white rounded-3xl text-[0.875rem]" : "bg-white text-black h-9 flex items-center gap-x-1.5 px-4 rounded-3xl transition-all hover:shadow-md font-semibold text-opacity-50 text-[0.875rem]"
       }
     
          to="/restaurants">
        <RiRestaurantFill size={20} className="text-opacity-25"/>
          Restoranlar
        </NavLink>

        <NavLink className={( {isActive}) => isActive ? "h-9 flex items-center gap-x-1.5 px-4  bg-brand-color text-white rounded-3xl text-[0.875rem]" : "bg-white text-black h-9 flex items-center gap-x-1.5 px-4 rounded-3xl transition-all hover:shadow-md font-semibold text-opacity-50 text-[0.875rem]"
       }
     
          to="/stores">
            <SlBasketLoaded size={20}/>
         Mağazalar
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
