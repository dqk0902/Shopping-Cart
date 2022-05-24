import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

import NoteCard from "../components/NoteCard";
export default function Carts({ carts, setCarts }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products?fbclid=IwAR0oXJKpcmKXS7CmJBPNhjz2Jq7FsyO-wghyVHIm2pBagiB7ddUBJivj7IY"
    )
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const handleClick = (item) => {
    item = { ...item, amount: 1 };

    setCarts((carts) => {
      let isItemInCart = carts.find((cartsItem) => item.id === cartsItem.id);

      if (isItemInCart) {
        return carts.map((cartsItem) =>
          item.id === cartsItem.id
            ? { ...item, amount: carts[carts.indexOf(cartsItem)].amount + 1 }
            : cartsItem
        );
      }

      return [...carts, item];
    });
  };
  return (
    <Container>
      <Grid container>
        {notes.map((item) => (
          <Grid item key={item.id} xs={12} md={6} lg={4}>
            <NoteCard item={item} handleClick={handleClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
