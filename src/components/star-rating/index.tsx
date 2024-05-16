import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function StarRating({ noOfStars = 10 }) {
  const [numberOfIndex, setNumberOfIndex] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      {[...Array(noOfStars)].map((item, index) => {
        index += 1;
        return (
          <FaStar
            size={40}
            key={index}
            onClick={() => setNumberOfIndex(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(numberOfIndex)}
            className={`${
              index <= (hover || numberOfIndex) ? "text-yellow-300" : ""
            }`}
          />
        );
      })}
    </div>
  );
}
