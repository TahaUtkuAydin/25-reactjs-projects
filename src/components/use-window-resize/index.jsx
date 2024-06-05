import React, {useLayoutEffect, useState } from "react";

export default function WindowResize() {
  const [resize, setResize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setResize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResize();

    window.addEventListener("resize",handleResize)

    return()=>{
        window.removeEventListener("resize",handleResize)
    }

  }, []);

  return resize
}
