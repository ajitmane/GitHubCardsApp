import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/CardList";
import SearchCard from "./components/SearchCard";
import { useState } from "react";

function App() {
  const [userProfiles, setuserProfiles] = useState([
    {
      name: "Dan Abramov",
      avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
      company: "@facebook",
    },
    {
      name: "Sophie Alpert",
      avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
      company: "Humu",
    },
    {
      name: "Sebastian Markbåge",
      avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
      company: "Facebook",
    },
  ]);

  const addUserProfile = (profile) => {
    setuserProfiles([...userProfiles, profile]);
  };
  return (
    <>
      <h3 className="header">The GitHub Cards App</h3>
      <SearchCard onSubmit={addUserProfile} />
      <CardList userProfiles={userProfiles} />
    </>
  );
}

export default App;
