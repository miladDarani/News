/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import '../../App.css'

const useStyles = makeStyles((theme)=>({

    searchContainer:{

        position:"relative",
    },
    textArea:{

        position:"absolute",
        left:"10px",
        top:"-10px",
        height:"40px",
        "& input": {

        },


    }


}))
export default function Playground(props) {
    const classes=useStyles();



    const [value, setValue] = React.useState(null);

    return (
        <Grid container className={classes.searchContainer}>
            <Grid item xs={12} className={classes.autoWrapper}>


                <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    variant="outlined"
                />
            </Grid>
        </Grid>
    );
}

