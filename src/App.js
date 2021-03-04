import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import Test from "./Components/Test";
import Home from "./Components/Home";
import {CircularProgress, Grid} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import SideMenu from "./Components/SideMenu";




function App() {








        return (

            <Grid container className="App">




                {/*----HOME----*/}
                <Grid item xs={12}><Home/></Grid>

            </Grid>

        )









}

export default App;
