import { useState } from "react";
import { useTheme } from "@mui/material";
import { BoxRound } from "../../components/BoxRound";
import { CenterPage } from "../../components/CenterPage/CenterPage";
import { useSetStorage } from "../../hooks/useSetStorage/useSetStorage";
import { calcPercentage } from "./utilities/calcPercentage/calcPercentage";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import values from "../../utilities/values/values";
import transformToDot from "../../utilities/tranformToDot/transformToDot";
function Uno() {
  const [money, setMoney] = useState(0);
  const [totalper, setTotalPer] = useState(false);
  const { palette } = useTheme((theme) => theme);
  const [data] = useSetStorage(values.percentage);
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
          Cálculo de un Monto Fijo
        </Typography>
        <Stack direction="column" alignItems="center" padding={8}>
          <Box>
            <Typography variant="h6">
              Tu monto es:
              <br />
              {transformToDot(!money ? 0 : money)} Gs
            </Typography>
          </Box>
          <form>
            <TextField
              value={money}
              onClick={() => {
                setMoney("");
              }}
              onChange={(e) => {
             
                if(e.target.value === ""){
                  setMoney(e.target.value);
                  setTotalPer(calcPercentage(0));
                }else{
                  const testreg= /^[0-9]+$/;
                  setMoney( (money) => testreg.test(e.target.value) ? e.target.value : money);
                  setTotalPer(calcPercentage(e.target.value, data));

                }
              }}
              sx={{
                margin: "15px 0",
              }}
              fullWidth
            />
          </form>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              El porcentaje es:
              <br />
              {transformToDot(!totalper ? 0 : totalper)} Gs
            </Typography>
          </Box>
        </Stack>
      </BoxRound>
    </CenterPage>
  );
}

export default Uno;
