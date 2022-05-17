import "./App.css";
import React, { useState } from "react";
import CardContainer from "./components/CardContainer";
import TheForm from "./components/TheForm";

import Title from "./components/Title";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [rating, setRating] = useState("");
  const [users, setusers] = useState([
    {  },
  ]);

  return (
    <>
      <Title />
      <TheForm
        name={name}
        setName={setName}
        dept={dept}
        setDept={setDept}
        rating={rating}
        setRating={setRating}
        users={users}
        setusers={setusers}
      />
      <CardContainer users={users} setusers={setusers} />
      
      {/* <Card name={name} dept={dept} rating={rating} /> */}
    </>
    
  );
}

export default App;
