import React from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import { BannerDiv, BannerHeadingTitle, BannerHeadingName } from "../const";

export default function BannerContent() {
  return (
    <BannerDiv className="banner-div-animation w-full flex items-center md:px-5 bg-red-500 h-screen">
      <div className="text-center my-40 mx-auto">
        <BannerHeadingTitle className="text-xl md:text-4xl text-left uppercase">
          I am
        </BannerHeadingTitle>
        <BannerHeadingName className="banner-heading-name font-serif text-5xl md:text-7xl xl:text-9xl font-extrabold text-center md:text-left">
          Min Thu Kyaw
        </BannerHeadingName>
        <BannerHeadingTitle className="text-xl md:text-4xl text-left uppercase">
          Full Stack Web & Flutter Developer
        </BannerHeadingTitle>
        <div className="animate-bounce text-sm text-white text-center absolute bottom-4 left-1/2 flex flex-col items-center">
          Scroll for more
          <HiOutlineChevronDoubleDown className="bounce-arrow-icon text-2xl uppercase" />
        </div>
      </div>
    </BannerDiv>
  );
}
