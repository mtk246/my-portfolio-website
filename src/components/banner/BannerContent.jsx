import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { BannerDiv, BannerHeadingTitle, BannerHeadingName } from "../const";

function BannerIcon(props) {
  return (
    <a
      href={props.link}
      className="banner-icon border-2 border-gray-200 rounded-full p-2"
    >
      {props.iconName}
    </a>
  );
}

export default function BannerContent() {
  return (
    <BannerDiv className="banner-div-animation w-full flex items-center md:px-5 bg-red-500 h-screen">
      <div className="text-center my-40 mx-auto">
        <BannerHeadingTitle className="text-xl md:text-4xl text-left uppercase">
          I am
        </BannerHeadingTitle>
        <BannerHeadingName className="banner-heading-name font-sans text-5xl md:text-7xl xl:text-9xl font-extrabold text-center md:text-left">
          Min Thu Kyaw
        </BannerHeadingName>
        <BannerHeadingTitle className="text-xl md:text-4xl text-left uppercase">
          Full Stack Web & Flutter Developer
        </BannerHeadingTitle>
        <div className="animate-bounce text-xl text-white text-center absolute bottom-4 grid grid-flow-col gap-3">
          <BannerIcon link="#" iconName={<FaGithub />} />
          <BannerIcon link="#" iconName={<FaFacebook />} />
          <BannerIcon link="#" iconName={<FaLinkedin />} />
          <BannerIcon link="#" iconName={<FaInstagram />} />
          <BannerIcon link="#" iconName={<FaTwitter />} />
        </div>
      </div>
    </BannerDiv>
  );
}
