import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardMedia } from "@mui/material";
import MainButton from "./MainButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignItems: "top",
    padding: "15px",
    margin: "32px",
    textAlign: "center",

    borderRadius: 15,
  },
});
export default function NoteCard({ item, handleClick }, props) {
  const classes = useStyles(props);
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <p>@{item.category}</p>
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${item.price}
          </Typography>
        </CardContent>
        <MainButton handleClick={handleClick} item={item} />
      </Card>
    </div>
  );
}
