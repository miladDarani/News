import React from 'react';


import {Grid} from "@material-ui/core";

import { makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme)=>({

    menuWrapper:{
        minHeight:"60px",
        background:"white",
        transition:".3s",
    },
    expanded:{
        minHeight:"160px",
        background:"white",
    },
    burger:{
        padding:theme.spacing(2)
    }

}))
const TopMenu = (props) => {
    const classes=useStyles();
    const defaultProps = {
        options: props.list.value,
        getOptionLabel: (option) => option.title,
    };
    const openMenu =() =>{

        document.getElementById('menu').style= 'height: 80vw'
    }
    const {list} = props;


    return (

            <Grid container className={classes.menuWrapper} id={"menu"}>
                <MenuIcon onClick={openMenu} className={classes.burger} fontSize={"large"}/>
            </Grid>

    );
}

export default TopMenu