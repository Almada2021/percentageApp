import { Button, useTheme } from "@mui/material"
import  Typography  from "@mui/material/Typography"
import { BoxRound } from "../../components/BoxRound"
import { CenterPage } from "../../components/CenterPage/"
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useSetStorage } from "../../hooks/useSetStorage/useSetStorage";
import values from "../../utilities/values/values";
import changeSetPercentage from "./utilities/changeSetPercentage/changeSetPercentage";
import changeState from "../../helpers/changeState/changeState";
import { isNotNumber } from "./utilities/isNotNumber/isNotNumber";
import { formatValueToShow } from "./utilities/formatValueToShow/formatValueToShow";
function Settings() {
  const { palette } = useTheme((theme) => theme);
  const [data, setDataStorage, setData] = useSetStorage(values.percentage) 
  return (
    <CenterPage>
      <BoxRound>
        <Typography marginTop={4} align="center" variant="h5" fontWeight="bold" color={palette.primary.main}>
          Configuración
        </Typography>
        <Stack 
          sx={{
            paddingLeft: "14px",
            paddingRight: "14px",
          }}
        >
          <Typography variant='subtitle1' align="center">
            Aqui puedes cambiar el porcentaje de la app el valor actual es : 
            <div>
              <Typography variant='subtitle2' color='#555'>
                !No olvides apretar el boton de guardado
              </Typography>
              <Typography variant="h6" fontWeight="bold" >
                {formatValueToShow(data, values.percentage) + "%"}
              </Typography>
            </div>
          </Typography>
        </Stack>
        <form>
          <Stack direction="row" padding={10}>
            <TextField
              required
              type="number"
              onChange={(e) => changeState(e, setData, isNotNumber(Number(e.target.value)), values.zero)}
              defaultValue={ formatValueToShow(data, values.percentage) + "%"}
              fullWidth
            ></TextField>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='center'>
            <Button variant='contained' onClick={(e) => changeSetPercentage(e, data.percentage, values.percentage, data, setDataStorage)}>
              Guardar
            </Button>
          </Stack>
        </form>
        
      </BoxRound>
    </CenterPage>
  )
}

export default Settings