import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("carts")) ?? "[]";
function App() {
  const [show, setShow] = useState(true);
  const [carts, setCarts] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  const handleClick = (item) => {
    if (carts.indexOf(item) !== -1) return;
    setCarts([...carts, item]);
  };
  const handleChange = (item, d) => {
    const ind = carts.indexOf(item);
    const arr = carts;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCarts([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={carts.length} />
      {show ? (
        <Cart handleClick={handleClick} />
      ) : (
        <Cards carts={carts} setCarts={setCarts} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
}

export default App;
