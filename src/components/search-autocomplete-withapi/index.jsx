import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function fetchUsers() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const result = await res.json();

      if (result && result.users) {
        setData(result.users.map((item) => item.firstName));
      }
    } catch {
      throw new Error("failed");
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(data, filteredData);

  function handleInputChange(e) {
    const query = e.target.value;
    setInputValue(query);
    if (query.length > 1) {
      const filterData = data.filter((item) =>
        item.toLowerCase().startsWith(query.toLowerCase())
      );
      setFilteredData(filterData);
    }else {
      setFilteredData([])
    }
  }

  function handleClick(e) {
    const value = e.target.innerText
    setInputValue(value)
    setFilteredData([])
  }

  return (
    <div>
      <input
        type="text"
        className="border border-solid"
        placeholder="Search Users Here"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
      {filteredData && <Suggestions filteredUsers={filteredData} onClick={handleClick} /> }
    </div>
  );
}
