import { useTheme } from "@mui/material";
import { useState } from "react";
import { BoxRound } from "../../components/BoxRound";
import { CenterPage } from "../../components/CenterPage";
import Typography from "@mui/material/Typography";
import ListInput from "../../components/ListInput/ListInput";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import CalculateIcon from "@mui/icons-material/Calculate";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useSetStorage } from "../../hooks/useSetStorage/useSetStorage";
import CalcComponent from "../../components/CalcComponent/CalcComponent";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { v4 as uuidv4 } from "uuid";

function Multiple() {
  const [calc, setCalc] = useState(false);
  const { palette } = useTheme((theme) => theme);
  const [data, setDataStorage] = useSetStorage("prevs");
  function deleteAll(){
    setDataStorage("prevs", [])
  }
  function addInput(){
    setDataStorage("prevs", [
      ...data,
      { id: uuidv4(), place: "", price: 0, check: false },
    ]);
  }
  function changeCalc (){
    setCalc((calc) => !calc)
  }
  return (
    <CenterPage>
      <BoxRound>
        <Typography
          marginTop={4}
          align="center"
          variant="h5"
          fontWeight="bold"
          color={palette.primary.main}
        >
          Cálculo de Listas
        </Typography>
        <Stack
          gap="10px 0"
          height="55vh"
          overflow="auto"
          direction="column"
          alignItems="center"
        >
          {!calc ? (
            <ListInput testArr={data} setDataStorage={setDataStorage} />
          ) : (
            <CalcComponent data={data} />
          )}
        </Stack>
        <Stack direction="row" justifyContent="center" gap={3}>
          <Fab
            color="error"
            onClick={deleteAll}
          >
            <DeleteIcon />
          </Fab>
          <Fab
            onClick={addInput}
          >
            <AddIcon />
          </Fab>

          <Fab
            color={calc ? "error" : "success"}
            onClick={changeCalc}
          >
            {!calc ? <CalculateIcon /> : <KeyboardReturnIcon />}
          </Fab>
        </Stack>
      </BoxRound>
    </CenterPage>
  );
}

export default Multiple;
