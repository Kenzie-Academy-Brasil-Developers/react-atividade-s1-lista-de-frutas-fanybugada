import { useState } from "react";
import "./App.css";
import FruitList from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    setFruits(fruits.filter((index) => index.color === "red"));
  };

  const totalPrice = fruits.reduce((acc, index) => index.price + acc, 0);

  return (
    <div className="App">
      <p>Preço total: {totalPrice}</p>
      <FruitList index={fruits}></FruitList>
      <button onClick={() => filterRedFruits}>Sou um botão</button>
    </div>
  );
}

export default App;
