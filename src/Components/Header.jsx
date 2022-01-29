import { AppBar, MenuItem, Container, Select, Toolbar, Typography, makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';

import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContent';
import AuthModel from './Authentication/AuthModel';
import UserSidebar from './Authentication/UserSidebar';


const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Limelight cursive",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));



const Header = () => {


    const classes = useStyles();
    const navigate = useNavigate();

    const { currency, setCurrency, user } = CryptoState();
    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: "dark",
        },
    })

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar color='transparent' position='static'>
                    <Container>
                        <Toolbar>
                            <Typography
                                className={classes.title}
                                onClick={() => navigate("/")}
                                variant='h6'
                            >
                                Crypto Info
                            </Typography>
                            <Select
                                variant="outlined"
                                style={{
                                    width: 100,
                                    height: 40,
                                    marginRight: 15,
                                }}
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <MenuItem value={"USD"}>USD</MenuItem>
                                <MenuItem value={"INR"}>INR</MenuItem>
                            </Select>

                            {user ? <UserSidebar /> : <AuthModel />}
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    )
};

export default Header;
