import React from "react";
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import "../styles/Cards.css";
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@mui/material";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignItems: "top",
    padding: "15px",
    margin: "32px",
    textAlign: "center",

    borderRadius: 15,
  },
  avatar: {
    fontSize: "20px",
    margin: "auto",
  },
});
export default function Cards({ carts, setCarts, handleChange }, props) {
  const classes = useStyles(props);
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

    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [carts]);
  return (
    <article>
      <Container>
        <Grid container>
          {carts.map((item) => (
            <Grid item xs={12} md={6} lg={4}>
              <Card className={classes.root}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  maxwidth="20"
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
                    <Button
                      disabled={item.amount === 0 ? true : false}
                      onClick={() => handleChange(item, -1)}
                    >
                      -
                    </Button>
                    <Button onClick={() => handleRemove(item.id)}>
                      Remove
                    </Button>
                  </div>
                  <Typography gutterBottom variant="h5" component="h2">
                    ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className="total">
        <span>Total Price of your Cart: </span>
        <span>{price?.toFixed(2)}</span>
      </div>
    </article>
  );
}
