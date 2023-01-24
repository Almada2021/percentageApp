import  { Suspense } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import SettingsIcon from '@mui/icons-material/Settings';
import { Route, Routes, useNavigate } from "react-router-dom";
import { lazy } from 'react';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
const Uno = lazy(() => import('../../pages/Uno/Uno'));
const Multiple = lazy(() => import('../../pages/Multiple/Multiple'));
const Settings = lazy(() => import('../../pages/Settings/Settings'));
const StyledFab = styled(Fab)(({theme, left}) =>{ 
  return({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: left,
  right: 0,
  margin: '0 auto',
})});

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: '50px', minHeight: "100vh" }}>
        <Suspense fallback={<LoadingComponent isPage={true}/>}>
          <Routes>
            <Route path='/'  element={<div >test</div>}/>
            <Route caseSensitive path='/uno'>
              <Route index element={<Uno/>}></Route>
            </Route>
            <Route caseSensitive path='/multiple'>
              <Route index element={<Multiple/>}></Route>
            </Route>
            <Route caseSensitive path='/settings'>
              <Route index element={<Settings/>}></Route>
            </Route>
          </Routes>
        </Suspense>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <StyledFab onClick={() => navigate("uno")} size='large' color="info" aria-label="add" left={"-50vw"}>
            <LooksOneIcon />
          </StyledFab>
          <StyledFab onClick={() => navigate("multiple")} size='large' color="error" aria-label="add" left={0}>
            <FormatListNumberedRtlIcon />
          </StyledFab>
          <StyledFab onClick={() => navigate("settings")} size='large' color="success" aria-label="add" left={"50vw"}>
            <SettingsIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </>
  );
}
