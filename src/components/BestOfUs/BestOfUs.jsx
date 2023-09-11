import React, { useMemo, useState, useRef, useEffect } from "react";
import BannerText from "../common/BannerText";
import { useDispatch, useSelector } from "react-redux";
import { addImage, removeImage } from "../../redux/reducers/UploadImageReducer";

const BestOfUs = () => {
  const images = useSelector((state) => state.UploadImageReducer);
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(null);
  const fileRef = useRef(null);
  const fallbackImage = useMemo(
    () =>
      "https://img.freepik.com/premium-vector/grid-transparency-effect-seamless-pattern-png-photoshop_194360-315.jpg",
    []
  );
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileUrl = URL.createObjectURL(file);
    const tempImgs = JSON.parse(JSON.stringify(images));
    tempImgs[selectedImg].src = fileUrl;
    dispatch(addImage(tempImgs));
  };
  const handleFileClear = () => {
    const tempImgs = JSON.parse(JSON.stringify(images));
    tempImgs[selectedImg].src = null;
    dispatch(removeImage(tempImgs));
  };

  return (
    <section className="flex flex-col gap-8 px-8 py-12 md:px-32 bg-primary-gray">
      <BannerText
        title={"Let Them Know Why You're The Best"}
        isBackgroud={false}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images?.map((i, index) => {
          console.log(i);
          return (
            <div className="relative h-48 group" key={i.id}>
              <img
                className="object-cover w-full h-full"
                src={i.src || fallbackImage}
                alt=""
              />
              <div className="absolute inset-0 z-10 items-center justify-center hidden w-full h-full transition-all duration-300 bg-black/10 group-hover:flex">
                <button
                  onClick={() => {
                    if (i.src) {
                      setSelectedImg(index);
                      handleFileClear();
                    } else {
                      fileRef.current?.click();
                      setSelectedImg(index);
                    }
                  }}
                  className="flex items-center justify-center w-4 h-4 text-center bg-white rounded-full cursor-pointer ring-1 ring-offset-8 ring-transparent ring-white"
                >
                  {i.src ? "-" : "+"}
                </button>
              </div>
            </div>
          );
        })}
        <input
          type="file"
          ref={fileRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </section>
  );
};

export default BestOfUs;
