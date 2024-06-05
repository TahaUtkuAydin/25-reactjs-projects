import { useEffect, useState } from "react";

export default function LightDarkMode() {
  const [color, setColor] = useState(
    () => localStorage.getItem("themeColor") || "gray"
  );

  useEffect(() => {
    localStorage.setItem("themeColor", color);
  }, [color]);

  return (
    <div className="h-screen w-screen" style={{ background: color }}>
      <h1>Hello World !</h1>
      <button
        onClick={() =>
          setColor((prevData) => (color === "gray" ? "white" : "gray"))
        }
      >
        Change Theme
      </button>
    </div>
  );
}
