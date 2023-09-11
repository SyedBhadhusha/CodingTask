import React, { useMemo, useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import CarousalItem from "./CarousalItem";
const Carousal = () => {
  const numberOfCarousals = useMemo(
    () => ["/src/assets/computer-icon.png", "/src/assets/computer-icon.png"],
    []
  );
  const [activeItem, setActiveItem] = useState(0);
  return (
    <section className="w-full h-[calc(100%-6rem)] relative">
      <button
        title="Prev"
        className="absolute top-0 bottom-0 left-0 z-10 w-6 h-6 m-auto disabled:cursor-not-allowed"
        onClick={() => setActiveItem((prev) => prev - 1)}
        disabled={activeItem === 0}
      >
        <MdOutlineArrowBackIosNew className="w-full h-full font-extrabold text-gray-300 " />
      </button>
      <button
        title="Next"
        className="absolute top-0 bottom-0 right-0 z-10 w-6 h-6 m-auto disabled:cursor-not-allowed"
        onClick={() => setActiveItem((prev) => prev + 1)}
        disabled={activeItem === numberOfCarousals.length - 1}
      >
        <MdOutlineArrowForwardIos className="w-full h-full font-extrabold text-gray-300" />
      </button>
      <div className="flex w-full h-full overflow-x-hidden">
        <div
          className="relative flex w-full h-full transition-all duration-500"
          style={{ right: `${activeItem * 100}%` }}
        >
          {numberOfCarousals.map((c) => (
            <CarousalItem key={c} src={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousal;
