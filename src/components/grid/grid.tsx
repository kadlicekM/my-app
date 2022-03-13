import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const ItemMenu = styled(Paper)(({ theme }) => ({
    backgroundColor: "white",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100vh"
}));

const ItemWindow = styled(Paper)(({ theme }) => ({
    backgroundColor: "#80808066",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100vh"
}));



export default function FullWidthGrid() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: "100vh",
            }}>
            <Grid container height="100vh">
                <Grid  item xs={3} lg={3}>
                    <ItemMenu sx={{fontSize:40}}>Menu</ItemMenu>
                    <Button>Hlavná stránka</Button>
                </Grid>
            
                <Grid item xs={3} lg={9}>
                    <ItemWindow>Hlavná stránka</ItemWindow>
                </Grid>

            </Grid>
        </Box >
    );
}



