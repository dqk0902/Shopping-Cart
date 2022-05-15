import React from "react";
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import "../styles/Cards.css";

export default function Cards({ carts, setCarts, handleChange }, props) {
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = carts.filter((item) => item.id !== id);
    setCarts(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    //carts.map((item) => (ans += item.amount * item.price));
    for (const cart of carts) {
      ans += cart.amount * cart.price;
    }
    console.log(ans);
    setPrice(ans);
  };
  console.log(typeof price);
  useEffect(() => {
    handlePrice();
  }, [carts]);
  return (
    <article>
      {carts.map((item) => (
        <Card>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            ehmdhg
            image={item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <div>
              <Button onClick={() => handleChange(item, 1)}>+</Button>
              <Button>{item?.amount}</Button>
              <Button disabled={true} onClick={() => handleChange(item, -1)}>-</Button>
              <Button onClick={() => handleRemove(item.id)}>Remove</Button>
            </div>
            <Typography gutterBottom variant="h5" component="h2">
              ${item.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <div className="total">
        <span>Total Price of your Cart: </span>
        <span>{price?.toFixed(2)}</span>
      </div>
    </article>
  );
}
