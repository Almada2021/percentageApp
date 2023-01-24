import  Box  from "@mui/material/Box"
import { styled } from '@mui/material/styles';
export const BoxRound = styled(Box)(({theme, boxColor = "#fff"}) => ({
    alignItems: "center",
    backgroundColor: boxColor,
    boxShadow: "0 0 3px #333",
    flexDirection: "column",
    height: "75vh",
    width:"80vw",
}))
