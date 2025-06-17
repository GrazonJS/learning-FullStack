import React, { useState } from "react";
import axios from "axios";

const GithubLogin = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  const handleClick = async () => {
    console.log(username);
    const fetchData = await axios.get(
      `https://api.github.com/users/${username}`
    );
    setData(fetchData);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your github username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
      <div>
        <h2>here is the data</h2>
        <img src={data?.data?.avatar_url} alt="" />
        <p>{data?.data?.name}</p>
      </div>
    </div>
  );
};

export default GithubLogin;
