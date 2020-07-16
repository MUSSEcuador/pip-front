import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Divider,
  List,
  ListItem,
  IconButton,
  Select,
  MenuItem,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "0 3px 10px 3px",
    border: "solid",
    borderColor: "rgb(200,200,200)",
    position: "relative",
    backgroundColor: "rgba(155,60,37, 0.05)",
  },
  media: {
    margin: " 2px 4vh",
    height: "20vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  brand: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "18%",
    opacity: 0.7,
  },
  divider: {
    marginTop: "2px",
    paddingTop: "3px",
    backgroundColor: "rgb(200,200,200)",
  },
  title: {
    fontWeight: "900",
  },
  subtitle: {
    fontWeight: "500",
    fontSize: "small",
  },
  listItem: {
    padding: "0 12px",
    margin: "0 2px",
  },
  listText: {
    padding: "0",
    margin: "0",
    fontSize: "1.2vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "small",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "small",
    },
  },
  selectContainer: {
    border: "solid",
    borderColor: "rgb(200,200,200)",
    borderWidth: "1px",
    backgroundColor: "rgb(59,56,56)",
  },
  selectProd: {
    color: "white",
    backgroundColor: "rgb(59,56,56)",
    height: "100%",
  },
  menuItem: {
    backgroundColor: "rgb(59,56,56)",
    color: "white",
  },
  irA: {
    border: "solid",
    borderColor: "rgb(200,200,200)",
    borderWidth: "1px",
    backgroundColor: "rgb(155,60,37)",
  },

  button: {
    color: "white",
  },
}));

function Producto(props) {
  const { producto, setUnidadSelected, goToCart } = props;
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div
        style={{ backgroundImage: `url(${producto.producto.imagen})` }}
        className={classes.media}
      >
        <img className={classes.brand} src={producto.finca.logo}></img>
      </div>
      <Divider className={classes.divider} />
      <p className={classes.title}>
        {producto.producto.nombreVisible + " " + producto.producto.variedad + " (" + producto.calidad.nombreVisible + ")"}
      </p>
      <List className={classes.list}>
        {producto.calidad.descripciones.map((descripcion) => {
          return (
            <ListItem className={classes.listItem} key={descripcion._id}>
              <p className={classes.listText}>
                {"* " + descripcion.descripcion}
              </p>
            </ListItem>
          );
        })}
        <ListItem className={classes.listItem}>
          {producto.diferenciador?<p className={classes.listText}>{"* " + producto.diferenciador}</p>:null}
        </ListItem>
      </List>
      <p style={{ alignContent: "center" }}>
          {" "}
          <b>{"$ "+ producto.precioSeleccionado}</b>
        </p>
      <Grid container>
          <Grid item xs={8} className={classes.selectContainer}>
            <Select
              fullWidth
              value={producto.unidadSeleccionada}
              className={classes.selectProd}
              onChange={(e) => {
                setUnidadSelected(e, producto);
              }}
            >
              {producto.unidadPrecio.map((presentacion) => {
                return (
                  <MenuItem  className={classes.menuItem} value={presentacion.unidad_medida.nombre} key={presentacion.id}>
                    {presentacion.unidad_medida.nombre}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={4} className={classes.irA}>
            <IconButton
              className={classes.button}
              aria-label="go to cart"
              onClick={()=>{goToCart(producto)}}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Grid>
        </Grid>
    </div>
  );
}

export default Producto;
