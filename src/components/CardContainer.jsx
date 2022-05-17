import React from "react";
import Card from "./Card";

const CardContainer = ({ users, setusers }) => {
  return (
    
    <>
      <div className="cardcont">
      
        {
        
          users.map((user) => (
            
          <Card name={user.name} dept={user.dept} rating={user.rating} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
