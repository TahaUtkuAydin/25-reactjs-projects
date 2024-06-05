import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className=" font-bold">QRCodeGenerator</h1>
      <div className="flex justify-center gap-4 ">
        <input
          placeholder="Enter your value here"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          onClick={() => setQrvalue(inputValue)}
        >
          Generate
        </button>
      </div>
      <QRCode size={400} value={qrvalue} />
    </div>
  );
}
