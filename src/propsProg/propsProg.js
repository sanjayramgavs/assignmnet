import React, { useState } from "react";
import DisplayProps from "./displayProps";

function PropsProg(props) {
  const [name, setName] = useState(""); // Initialize name state
  const [showDisplayProps, setShowDisplayProps] = useState(false); // Control whether to show DisplayProps

  const handleClick = () => {
    const inputName = document.getElementById("names").value;
    setName(inputName);
    setShowDisplayProps(true); // Set showDisplayProps to true to conditionally render DisplayProps
  };

  return (
    <div>
      <h1>PropsProg</h1>
      <h2>Hi {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <input type="text" id="names" />
      <button onClick={handleClick}>Click me</button>

      {/* Conditionally render DisplayProps */}
      {showDisplayProps && <DisplayProps name={name} />}
    </div>
  );
}

export default PropsProg;
