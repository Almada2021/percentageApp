import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useState } from "react";
import transformToDot from "../../utilities/tranformToDot/transformToDot";
import { useSetStorage } from "../../hooks/useSetStorage/useSetStorage";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: "2px 0 0 0",
  color: theme.palette.text.secondary,
}));

function CalcComponent({ data }) {
  function calcTotal(arr = [], key = "price") {
    let total = 0;
    arr.forEach((element) => (total += Number(element[key])));
    return total;
  }
  const [percentageData] = useSetStorage("percentage")
  const [total] = useState(calcTotal(data, "price"));
  const [percentajeState] = useState((total * Number(percentageData.percentage)) / 100);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "place",
      headerName: "Lugar",
      width: "200",
    },
    {
      field: "price",
      headerName: "Precio",
      width: "140",
    },
  ];
  return (
    <Box id="pdf-page" sx={{ height: "85%", width: "90%" }}>
      <DataGrid
        rows={data}
        columns={[columns[1], columns[2]]}
        pageSize={3}
        rowsPerPageOptions={[3]}
        disableSelectionOnClick
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Item>
              <Typography fontWeight="bold" color="#000">
                Total
                <br/>
                {transformToDot(total)} Gs
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography fontWeight="bold" color="#000">
                Porcentaje 
                <br/>
                {transformToDot(percentajeState)} Gs
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CalcComponent;
