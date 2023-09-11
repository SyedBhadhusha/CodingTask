import React from "react";
import ContentHeader from "./ContentHeader";
import {
  AiOutlineGoogle,
  AiFillGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

const Content3 = () => {
  const iconsArr = [
    AiOutlineGoogle,
    BsTwitter,
    BiLogoFacebook,
    AiFillGithub,
    AiOutlineYoutube,
    BiLogoLinkedin,
  ];
  return (
    <div className="flex flex-col gap-2">
      <ContentHeader title={"Social Media"} />
      <p className="text-sm text-gray-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        minus eum excepturi{" "}
      </p>
      <div className="flex flex-wrap items-center gap-2 ">
        {iconsArr.map((Icon, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-8 h-8 transition ease-in-out delay-150 rounded-full cursor-pointer bg-secondary-green color-white hover:-translate-y-1 hover:scale-110"
          >
            <Icon color={"white"} className="text-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content3;
