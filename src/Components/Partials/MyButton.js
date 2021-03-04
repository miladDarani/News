import React from 'react';
import {Button, Grid, Icon} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const useStyles = makeStyles((theme)=>({

    myLink:{
        textDecoration:"none",
        background:"rgba(0, 0, 0, 0.19)",
        padding:theme.spacing(1),
        borderRadius:"5px",
        color:"white",
        display:"flex",
        width:"50%",
        transition:".3s",
    },
    '&:hover': {
        background: "red",
    },

    arrow:{
        display:"flex",
        marginTop:"1px",
        alignSelf:"center",
    },
    button:{
        marginTop:"30px",
        alignSelf:"left",
        display:"flex",
        boxShadow:"none",
    }

}))


const MyButton = (props) => {
    const classes=useStyles();





    return (
        <Button
            variant="contained"
            href={props.link}
            className={classes.button}
            endIcon={<PlayArrowIcon />}
        >
            Read the article
        </Button>
    );
}

export default MyButton