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

  const handleChange = (item, d) => {
    const ind = carts.indexOf(item);
    const arr = carts;
    arr[ind].amount += d;
    
    setCarts([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={carts.length} />
      {show ? (
        <Cart carts={carts} setCarts={setCarts} />
      ) : (
        <Cards carts={carts} setCarts={setCarts} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
}

export default App;
