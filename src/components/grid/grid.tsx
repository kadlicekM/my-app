import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { height } from '@mui/system';
import { sizing } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "gray",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: "75%",
            }}>
            <Grid container spacing={2} height="75%">
                <Grid item xs={3} lg={3}>
                    <Item>xs=6 md=8</Item>
                </Grid>
                <Grid>
                    <Item>Hlavná stránka</Item>
                </Grid>

            </Grid>
        </Box >
    );
}



