import React, { useEffect, useState } from "react";
import Users from "./users";

export default function GithubFinder() {
  const [userName, setUserName] = useState("TahaUtkuAydin");
  const [userData, setUserData] = useState(null);

  async function fetchProfile() {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const result = await res.json();

    if (result) {
      setUserData(result);
      setUserName("")
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);
  

  return (
    <div className="space-y-9">
      <div className="flex justify-center gap-4">
        <input
          type="text"
          placeholder="Search Github Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => fetchProfile()}>Search</button>
      </div>
      {userData !== null ? <Users user={userData} /> : null }
    </div>
  );
}
