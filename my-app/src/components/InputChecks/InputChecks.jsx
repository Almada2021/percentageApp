import { useState, useReducer } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import changeRender from "./utilities/changeRender/changeRender";
import reducerFields from "./utilities/reducer/reducerFields";
import { v4 as uuidv4 } from 'uuid';
const InputIcon = styled(Fab)(({ theme, iconcheck = false }) => ({
  boxShadow: "none",
  color: "#fff",
  margin: "0 5px",
  minWidth: "40px",
  backgroundColor: iconcheck !== "true" ? theme.palette.primary.light : "#0f0",
  ["&:hover"]: {
    backgroundColor:
      iconcheck !== "true" ? theme.palette.primary.secondary : "#0e2",
  },
  ["&:active"]: {
    backgroundColor:
      iconcheck !== "true" ? theme.palette.primary.secondary : "#0e2",
  },
}));
function InputChecks({ values, setDataStorage, data, element }) {
  const [renderValue, setRender] = useState(true);
  const [state, dispatch] = useReducer(reducerFields, {
    place: element?.place,
    price: element?.price,
    check: element?.check,
  });
  if (!renderValue) {
    return null;
  }
  return (
    <Stack padding={1} direction="row" alignItems="center">
      <TextField
        sx={{
          marginRight: "2px",
          marginLeft: "2px",
        }}
        value={state?.place}
        onChange={(e) => dispatch({ type: "place", value: e.target.value })}
        placeholder="Lugar"
        size="small"
      />
      <TextField
        sx={{
          marginRight: "2px",
          marginLeft: "2px",
        }}
        onClick={() => {
          if (state?.price <= 0) {
            dispatch({ type: "price", value: "" });
          }
        }}
        onChange={(e) => dispatch({ type: "price", value: e.target.value })}
        value={state?.price}
        placeholder="Cantidad"
        size="small"
      />

      <InputIcon
        size="small"
        iconcheck={
          state.check |
          (JSON.stringify({ ...state, check: true, id: 0 }) ===
            JSON.stringify({...element, id: 0}))
            ? "true"
            : "false"
        }
        onClick={(e) => {
          if (
            (state.place !== element.place) |
            (state.price !== element.price)
          ) {
            setDataStorage(
              "prevs",
              data.map((element, index) =>
                values === index
                  ? {id: element.id ? element.id : uuidv4(), place: state?.place, price: state?.price, check: true }
                  : element
              )
            );
          }
        }}
      >
        <CheckIcon />
      </InputIcon>
      <InputIcon
        size="small"
        onClick={() => {
          setDataStorage(
            "prevs",
            data.filter((element, index) => index !== values)
          );
          changeRender(setRender);
        }}
      >
        <DeleteIcon />
      </InputIcon>
    </Stack>
  );
}

export default InputChecks;
