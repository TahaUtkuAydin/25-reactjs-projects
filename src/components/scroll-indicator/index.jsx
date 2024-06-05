import React, { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(null);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const result = await res.json();

      if (result) {
        setData(result.products);
      }
    } catch {
      throw new Error("problem");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleScrollPercentage() {
    const howMuchScrolled = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight 
    
    setScrollPercentage((howMuchScrolled/height) * 100)
    
  }

  useEffect(()=> {
   window.addEventListener("scroll", handleScrollPercentage)
   
   return ()=> {
    window.removeEventListener("scroll", ()=> {})
   }
  },[])


  return (
    <div>
      <div className="flex flex-col bg-green-800 text-white font-bold fixed top-0 w-full z-10 items-center justify-center h-32">
        <h1>Custom Scroll Indicator</h1>
        <div className="bg-green-400 w-full h-3 absolute bottom-0">
          <div
            className="h-3 bg-purple-600"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-[106px]">
        {data && data.length > 0
          ? data.map((item) => <p key={item.id}>{item.title} </p>)
          : null}
      </div>
    </div>
  );
}
