import React from "react";

const Card = ({ name, avatar_url, company }) => {
  return (
    <div className="github-profile" style={{ margin: "1rem" }}>
      <img src={avatar_url} style={{ width: "7%" }} />
      <div className="info" style={{ display: "inline-block", marginLeft: 10 }}>
        <div className="name" style={{ fontSize: "125%" }}>
          {name}
        </div>
        <div className="company">{company}</div>
      </div>
    </div>
  );
};

export default Card;
