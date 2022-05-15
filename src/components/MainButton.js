import { Button } from "@mui/material";
import React from "react";

export default function MainButton({ handleClick, item }) {
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        onClick={() => handleClick(item)}
      >
        Add To Cart
      </Button>
    </div>
  );
}
