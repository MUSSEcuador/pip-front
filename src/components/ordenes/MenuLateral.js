import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TextField , IconButton, InputAdornment} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  textField: {},
}));

function MenuLateral() {
  const callFilter = (e) => {
    setFilter(e.target.value);
    // if (e.target.value) {
    //   const filterAux = e.target.value.toLowerCase();
    //   const filtered = allPersonal.filter((el) => {
    //     return (
    //       el.nombres.toLowerCase().includes(filterAux) ||
    //       el.apellidos.toLowerCase().includes(filterAux)
    //     );
    //   });
    //   getMaxPages(filtered.length);
    //   setDataForPage(filtered, 1);
    //   setPersonas(filtered);
    // } else {
    //   getMaxPages(allPersonal.length);
    //   setDataForPage(allPersonal, 1);
    //   setPersonas(allPersonal);
    // }
  };
  const classes = useStyles();
  const [filter, setFilter] = React.useState("");
  return (
    <div>
      <TextField
        size="small"
        variant="outlined"
        placeholder="Buscar"
        className={classes.textField}
        value={filter}
        onChange={(e) => {
          callFilter(e);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </div>
  );
}

export default MenuLateral;
