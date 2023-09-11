import React from "react";
import CompanyLogo from "../../assets/company-logo.png";

const CarousalItem = ({ src }) => {
  return (
    <div className={`flex h-full min-w-full items-center`}>
      <div className="items-center justify-end flex-1 hidden w-full h-full bg-contain md:flex">
        <img
          className="w-[90%] 2xl:w-[90%]  h-full object-cover"
          src={src}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-start flex-1 p-8 pt-8 text-white">
        <h1 className="text-[40px] font-thin uppercase">Awesome</h1>
        <div>
          <h2 className="text-[40px] font-bold uppercase">Website</h2>
          <h2 className="text-[40px] font-bold uppercase">Template</h2>
        </div>
        <p className="text-sm text-gray-50">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          accusamus repellendus, labore numquam, tempore possimus doloremque
          alias illum qui sed exercitationem rerum? Ipsam deleniti eligendi quo
          tenetur, odit assumenda aperiam.
        </p>
      </div>
    </div>
  );
};

export default CarousalItem;
