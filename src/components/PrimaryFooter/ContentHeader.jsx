import React from "react";

const ContentHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <h3 className="font-bold text-white text-md">{title}</h3>
      <div className="flex-auto h-[2px] bg-white " />
    </div>
  );
};

export default ContentHeader;
