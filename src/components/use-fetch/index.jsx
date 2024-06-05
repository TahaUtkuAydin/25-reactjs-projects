import { useEffect, useState } from "react";

export default function UseFetch(url,options={}) {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState("");

  async function fetchData() {
    setPending(true);
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(res.statusText);
      const result = await res.json();
      setData(result);
      setPending(false);
    } catch (e) {
      setError(`${e}. Some error occured`);
      setPending(false);
    }
  } 

  useEffect(()=>{
    fetchData()
  },[url])

  return {data,pending,error}
}