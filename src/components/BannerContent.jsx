import React from "react";
import styled from "styled-components";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const BannerHeadingTitle = styled.h1`
  color: ${(props) => props.theme.bannerHeadingTitle};
`;

const BannerHeadingName = styled.p`
  color: ${(props) => props.theme.bannerHeadingName};
  line-height: 1.5;
`;

export default function BannerContent() {
  return (
    <div className="banner-div-animation w-full flex items-center md:px-5">
      <div className="text-center my-40 mx-auto">
        <BannerHeadingTitle className="text-xl md:text-4xl text-left">
          I'm
        </BannerHeadingTitle>
        <BannerHeadingName className="banner-heading-name text-5xl md:text-7xl xl:text-9xl font-extrabold text-center md:text-left ">
          Min Thu Kyaw
        </BannerHeadingName>
        <BannerHeadingTitle className="text-xl md:text-4xl text-left">
          Full Stack Web & Flutter Developer
        </BannerHeadingTitle>
        <div className="animate-bounce text-sm text-white text-center absolute bottom-4 left-1/2 flex flex-col items-center">
          Scroll for more
          <HiOutlineChevronDoubleDown className="bounce-arrow-icon text-2xl" />
        </div>
      </div>
    </div>
  );
}
