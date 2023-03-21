import NovruzSlider from "components/discovery/NovruzSlider";
import PopularRestoranSlider from "components/discovery/PopularRestoranSlider";
import PopularStores from "components/discovery/PopularStores";
import SliderPage from "components/discovery/SliderPage";
import React from "react";

const Discovery = () => {
  return <div>
    <SliderPage />
    {/* Novruz Offers */}
    <NovruzSlider />
    {/* Popular Restorans */}
    <PopularRestoranSlider />
    {/* Popular Stores */}
    <PopularStores />

  </div>;
};

export default Discovery;
