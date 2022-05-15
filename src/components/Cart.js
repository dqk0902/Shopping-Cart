import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

import NoteCard from "../components/NoteCard";
export default function Notes({ handleClick }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products?fbclid=IwAR0oXJKpcmKXS7CmJBPNhjz2Jq7FsyO-wghyVHIm2pBagiB7ddUBJivj7IY"
    )
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

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
