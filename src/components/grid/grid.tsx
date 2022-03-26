import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { green, pink } from '@mui/material/colors';


const ItemMenu = styled(Paper)(({ theme }) => ({
    backgroundColor: "white",
    ...theme.typography.body2,
    padding: theme.spacing(0),      // spacing(1) = 8px paddingu 
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: "100vh"
}));

const ItemWindow = styled(Paper)(({ theme }) => ({
    backgroundColor: "#80808066",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //height: "100vh"
}));

 //fullWidth aby boli buttony pod sebou 

export default function FullWidthGrid() {
    return (
        <Box
            sx={{
                flexGrow: 3,
                height: "100vh",
            }}>
            <Grid container height="100vh" >
                <Grid item xs={3} lg={3} direction= "row">
                    <ItemMenu 
                    sx={{
                        fontSize:40,
                        mb:10       //mb= margin-bottom
                    }}>Menu
                    </ItemMenu>
                    <Stack direction = "column" spacing = {2}>
                    <Button startIcon={<HomeRoundedIcon sx={{color: green[100]}}/>}>Hlavná stránka</Button>  
                    <Button >Grafy</Button>
                    <Button startIcon = {<SettingsIcon sx={{color: green[100]}}/>}>Konfigurácia</Button>
                    </Stack>

                </Grid>
           
            
                <Grid item xs={3} lg={9} >
                    <ItemWindow>Hlavná stránka</ItemWindow>
                </Grid>
            </Grid>
            
        </Box >
    );
}
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

// export default function BasicGrid() {
//     return (
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={8}>
//             <Item>xs=8</Item>
//           </Grid>
//           <Grid item xs={4}>
//             <Item>xs=4</Item>
//           </Grid>
//           <Grid item xs={4}>
//             <Item>xs=4</Item>
//           </Grid>
//           <Grid item xs={8}>
//             <Item>xs=8</Item>
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   }


