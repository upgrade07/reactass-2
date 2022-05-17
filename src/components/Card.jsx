import React from "react";

const Card = ({ name, dept, rating }) => {
  return (
    <div className="card">
      <span className="userinfo">Name : {name}</span>
      <span> || </span>
      <span className="userinfo"> Department : {dept}</span>
      <span> ||</span>
      <span className="userinfo"> Rating : {rating}</span>
    </div>
  );
};

export default Card;
