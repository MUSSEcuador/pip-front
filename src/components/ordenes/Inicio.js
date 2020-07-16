import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Box, Grid, Dialog } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import Producto from "./Producto";
import Banners from "./Banners";
import MenuLateral from "./MenuLateral";
import Cart from "./Cart";

const maxItemsPerPage = 2;

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "30vh",
    margin: "0 0 2vh 0",
    border: "outset",
  },
  pagination: {
    display: "inline-block",
  },
  modal:{
    height: "80vh",
    width: "90vw",
    [theme.breakpoints.down("sm")]: {
      margin: "15vh 5vw",
      height: "60vh",
      width: "90vw",

    }, 
  }

}));

function Inicio() {
  const classes = useStyles();
  const [productos, setProductos] = React.useState();
  const [page, setPage] = React.useState(1);
  const [pageData, setPageData] = React.useState([]);
  const [countPages, setCountPages] = React.useState(1);
  const [goToShop, setGoTOShop] = React.useState(false);
  const [prodAComprar, seetProdAComprar] = React.useState();

  const allProductos = useStoreState((state) => state.allProductos);
  const getAllProductos = useStoreActions((actions) => actions.getAllProductos);

  const getMaxPages = (n) => {
    const total = n / maxItemsPerPage;
    setCountPages(Math.ceil(total));
    return total;
  };
  const handleChangePagination = (event, value) => {
    setDataForPage(productos, value);
  };

  const setDataForPage = (originalData, pageValue) => {
    const minIndex = (pageValue - 1) * maxItemsPerPage;
    const maxIndex = Math.min(originalData.length, minIndex + maxItemsPerPage);

    const newPage = originalData.slice(minIndex, maxIndex);
    setPageData(newPage);
    setPage(pageValue);
  };

  const setUnidadSelected = (e, prod) => {
    const aux = productos.slice().map((el) => {
      if (el.id === prod.id) {
        let precio;
        prod.unidadPrecio.forEach((p) => {
          if (p.unidad_medida.nombre === e.target.value) {
            precio = p.precio;
          }
        });
        return {
          ...el,
          unidadSeleccionada: e.target.value,
          precioSeleccionado: precio,
        };
      }
      return el;
    });
    setProductos(aux);
    setDataForPage(aux, 1);
  };

  const goToCart = (seleccionado) => {
    console.log(seleccionado);
    seetProdAComprar(seleccionado);
    setGoTOShop(true);
  };
  const closeCart = () => {
    setGoTOShop(false);
  };

  useEffect(() => {
    getAllProductos();
  }, [getAllProductos]);

  useEffect(() => {
    const nElem = allProductos.length;
    const total = getMaxPages(nElem);
    const aux = allProductos.slice().map((el) => {
      return {
        ...el,
        unidadSeleccionada: el.unidadPrecio[0].unidad_medida.nombre,
        precioSeleccionado: el.unidadPrecio[0].precio,
      };
    });
    setProductos(aux);
    if (total > 0) {
      setPageData(aux.slice(0, Math.min(nElem, maxItemsPerPage)));
    }
  }, [allProductos]);

  return (
    <div>
      <Box className={classes.banner}>
        <Banners />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Pagination
            className={classes.pagination}
            size="large"
            count={countPages}
            page={page}
            onChange={handleChangePagination}
          />
          <Grid container>
            {pageData.map((producto) => {
              console.log(producto);
              if (producto.disponibilidad) {
                return (
                  <Grid item xs={12} sm={4} lg={3} key={producto.id}>
                    <Producto
                      producto={producto}
                      setUnidadSelected={setUnidadSelected}
                      goToCart={goToCart}
                    />
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
        <Grid item xs={false} md={3}>
          <MenuLateral />
        </Grid>
      </Grid>
      <Dialog open={goToShop} onClose={closeCart} className={classes.modal}>

          <Cart producto={prodAComprar} />

      </Dialog>
    </div>
  );
}

export default Inicio;
