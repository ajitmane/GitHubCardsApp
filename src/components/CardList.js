import React from "react";
import Card from "./Card";

const CardList = ({ userProfiles }) => {
  return (
    <div>
      {userProfiles.map((profile) => (
        <Card {...profile} />
      ))}
    </div>
  );
};

export default CardList;
