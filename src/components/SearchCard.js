import React, { useState } from "react";

const SearchCard = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userName ==>", userName);
    if (userName.length > 3) {
      const searchedResponse = await fetch(
        `https://api.github.com/users/${userName}`
      );
      const searchedProfiles = await searchedResponse.json();
      console.log("searchedProfiles ==>", searchedProfiles);
      onSubmit(searchedProfiles);
      setUserName("");
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub Username"
        required
        value={userName}
        onChange={(e) => setUserName(e.currentTarget.value)}
      />
      <button>Add Card</button>
    </form>
  );
};

export default SearchCard;
