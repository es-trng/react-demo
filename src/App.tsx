import React from "react";
import "./App.css";
import Counter from "./Counter";
import Person from "./Person";

function App() {
  const personName = "Ironman";
  const myStyle = { color: "green", backgroundColor: "yellow" };
  const isError = true;

  const labelStyle = () => {
    if (isError) return "invalid";
    else return "";
  };

  const handleWave = (args: string) => {
    alert(`${args} waved`);
  }

  return (
    <div className="App">
      <h1 className="title">Hello {personName}!</h1>
      <h2 style={myStyle}>New Data</h2>;
      <h3 className={labelStyle()}>Enter Name</h3>
      {isError && <p className="invalid">Please enter name.</p>}
      <Person name={personName} wave={handleWave}></Person>
      <Counter></Counter>
    </div>


  );
}

export default App;
