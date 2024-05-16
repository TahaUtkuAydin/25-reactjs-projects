import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

export default function LoadMoreData() {
  const [data, setData] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  async function fetchData() {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : 20 * count}`);
      const result = await res.json();
      if (result && result.products) {
        setData((prevData)=>[...prevData, ...result.products])
      }
    } catch {
      throw new Error("failed to fetch");
    }
  }
  useEffect(() => {
    fetchData();
  }, [count]);
  console.log(data);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {data && data.length
          ? data.map((item) => (
              <div key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <button onClick={()=>setCount(count+1)}>Load More</button>
    </div>
  );
}
