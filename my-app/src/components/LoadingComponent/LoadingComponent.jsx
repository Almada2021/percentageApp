import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LoadingComponent({isPage}) {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' height={isPage ? "100vh" : '100%'} width="100%">

            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
        </Box>
    )
}

export default LoadingComponent