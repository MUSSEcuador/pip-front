import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    //width: "90vw",
    [theme.breakpoints.down("sm")]: {
      margin: "15vh 5vw",
      height: "60vh",
      width: "90vw",
    },
  },
  media: {
    margin: "4vh",
    height: "200px",
    width: "200x",
   
  },
  brand: {
    margin: "4vh",
    height: "100px",
    width: "100px",
  },
  red:{
      backgroundColor: "red"
  },
  yellow:{
    backgroundColor: "yellow"
}
}));

function Cart(props) {
  const classes = useStyles();
  const { producto } = props;

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <div className={classes.red}>
            <img className={classes.media} src={producto.producto.imagen}></img>
          </div>
        </Grid>
        <Grid item xs={12} md={7} className={classes.yellow}>
          <div align="center">
            <img className={classes.brand} src={producto.finca.logo}></img>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Cart;
