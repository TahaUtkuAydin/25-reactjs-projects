import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("HEX");
  const [color, setColor] = useState("");

  function randomGenerator(length:number) {
    return Math.floor(Math.random() * length);
  }

  function handleHEXColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomGenerator(hex.length)];
    }
    console.log(color);

    setColor(hexColor);
  }

  function handleRGBColor() {
    let r = randomGenerator(256);
    let g = randomGenerator(256);
    let b = randomGenerator(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    typeOfColor === "HEX" ? handleHEXColor() : handleRGBColor();
  }, [typeOfColor]);

  return (
    <div
      className={"items-center w-screen h-screen"}
      style={{ background: color }}
    >
      <div className="flex gap-4 justify-center ">
        <button onClick={() => setTypeOfColor("HEX")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("RGB")}>Create RGB Color</button>
        <button
          onClick={() =>
            typeOfColor === "HEX" ? handleHEXColor() : handleRGBColor()
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex flex-col gap-20 mt-16 text-6xl items-center ">
        <p>{typeOfColor} </p>
        <p>{color} </p>
      </div>
    </div>
  );
}
