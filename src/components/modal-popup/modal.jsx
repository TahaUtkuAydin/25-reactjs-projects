import React from "react";

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div className="bg-green-400 w-full z-10 h-full fixed top-0 left-0 overflow-auto pt-[150px]">
      <div className="flex flex-col m-auto relative bg-green-800 border-2 w-[80%] p-0 text-white ">
        <div className="pt-1 pr-4">
          <span
            className="text-3xl font-bold float-right cursor-pointer"
            onClick={() => onClose()}
          >
            &times;
          </span>
          <h2 className="text-3xl">{header ? header : "Header"}</h2>
        </div>
        <div className="h-[200px] pt-[2px] pr-4 bg-white text-black">
          {body ? (
            body
          ) : (
            <div>
              
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="h-[50px] pt-[2px] pr-4">{footer ? footer :<h2>Footer</h2>} </div>
      </div>
    </div>
  );
}
