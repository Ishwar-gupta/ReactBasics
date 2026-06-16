import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    Name: "Siddheshwar Gupta",
    Age: 22,
    Faculty: "Bsc.CSIT",
  };

  return (
    <>
      <h2 className="bg-red-600 text-black p-4 rounded">Hello world</h2>
      <Card username="This is Sid Gupta" someObj={obj} btnText="Click Me" />
      <Card username="Siddheswar Gupta" someObj={obj} />
    </>
  );
}

export default App;
