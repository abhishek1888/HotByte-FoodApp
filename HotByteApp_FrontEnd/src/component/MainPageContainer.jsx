import React from "react";
import Container from "./Container";
import ContainerForType from "./ContainerForType";
import ContainerForTopChain from "./ContainerForTopChain";
import HeadingCity from "./HeadingCity";
import FiltersContainer from "./FiltersContainer";
import HotelList from "./HotelList";

const MainPageContainer = () => {
  return (
    <div className="mainpage">
      <ContainerForType />
      <hr className="border" />
      <ContainerForTopChain />
      <hr className="border" />
      <HeadingCity />
      <HotelList/>
    </div>
  );
};

export default MainPageContainer;
