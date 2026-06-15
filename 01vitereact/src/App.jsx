import Chai from "./Chai";
import Navbar from "./Navbar";

function App() {
  const username = "Learning by chai aur code youtube channel";
  return (
    <>
      <Navbar />
      <Chai />
      <h1>Learning React with chai aur code | Siddheshwar Gupta {username}</h1>;
      //{username} is evaluated expression
      <p>but she is too innocent and pretty</p>;
    </>
  );
}

export default App;
