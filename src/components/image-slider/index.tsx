import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

export default function ImageSlider() {
  const [images, setImages] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  async function fetchImages() {
    try {
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
      const result = await res.json();

      if (result) {
        setImages(result);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  useEffect(() => {
    fetchImages();
  }, []);

  function handleLeftButton() {
    setCount(count === 0 ? images.length - 1 : count - 1);
  }
  function handleRightButton() {
    setCount(count === images.length - 1 ? 0 : count + 1);
  }

  return (
    <div className="flex relative justify-center items-center w-[600px] h-[450px] ">
      <BsArrowLeftCircle
        onClick={() => handleLeftButton()}
        className=" w-8 h-8"
      />

      {images && images.length > 0
        ? images.map((imageItem, index) => (
            <img
              className={`${
                index === count ? "" : "hidden"
              } w-full h-full rounded-lg `}
              src={imageItem.download_url}
              key={imageItem.id}
              alt={imageItem.download_url}
            ></img>
          ))
        : null}

      <BsArrowRightCircle
        onClick={() => handleRightButton()}
        className=" w-8 h-8"
      />

      <span className="flex absolute bottom-4 ">
        {images && images.length > 0
          ? images.map((imageItem, index) => (
              <button
                className={`rounded-full bg-slate-100 h-4 mb-1 w-4 border-none outline-none ${
                  index === count ? "bg-yellow-300" : ""
                }`}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
