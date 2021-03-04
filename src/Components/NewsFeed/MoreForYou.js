import React from 'react';

import {Grid, Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import MainArticleCard from "./MainArticleCard";
import TrendStory from "./TrendStory";

const useStyles = makeStyles((theme)=>({
    moreForYouWrapper:{
        padding: theme.spacing(3)
    },
    H1:{
        textAlign:"left",
        color:"white",
        padding:theme.spacing(3),
        fontFamily: "'Work Sans', sans-serif",
    }

}))

const MoreForYou = (props)=>{
    const {list, isLoaded} = props
    const classes=useStyles();
    if(isLoaded === true && Object.keys(list).length > 1){
    return (
        <Grid container>
            <Grid item xs={12}>
                <h1 className={classes.H1}>More For You</h1>
            </Grid>

            <Grid className={classes.moreForYouWrapper} item  xs={12} md={4}>
                <MainArticleCard
                    title={list.value[18].title}
                    imageLink={list.value[18].image.url}
                    articleLink={list.value[18].url}
                    time={props.time}
                />
            </Grid>

            <Grid className={classes.moreForYouWrapper} item  xs={12} md={4}>
                <MainArticleCard
                    title={list.value[19].title}
                    imageLink={list.value[19].image.url}
                    articleLink={list.value[19].url}
                    time={props.time}
                />
            </Grid>

            <Grid className={classes.moreForYouWrapper} item  xs={12} md={4}>
                <MainArticleCard
                    title={list.value[20].title}
                    imageLink={list.value[20].image.url}
                    articleLink={list.value[20].url}
                    time={props.time}
                />
            </Grid>

            <Grid className={classes.moreForYouWrapper} item  xs={12} >
                <MainArticleCard
                    title={list.value[21].title}
                    imageLink={list.value[21].image.url}
                    articleLink={list.value[21].url}
                    time={props.time}
                />
            </Grid>

            <Grid className={classes.moreForYouWrapper} item  xs={12} md={3}>
                <MainArticleCard
                    title={list.value[22].title}
                    imageLink={list.value[22].image.url}
                    articleLink={list.value[22].url}
                    time={props.time}
                />
            </Grid>
            <Grid className={classes.moreForYouWrapper} item  xs={12} md={3}>
                <MainArticleCard
                    title={list.value[23].title}
                    imageLink={list.value[23].image.url}
                    articleLink={list.value[18].url}
                    time={props.time}
                />
            </Grid>
            <Grid className={classes.moreForYouWrapper} item  xs={12} md={3}>
                <MainArticleCard
                    title={list.value[24].title}
                    imageLink={list.value[24].image.url}
                    articleLink={list.value[24].url}
                    time={props.time}
                />
            </Grid>
            <Grid className={classes.moreForYouWrapper} item  xs={12} md={3}>
                <MainArticleCard
                    title={list.value[25].title}
                    imageLink={list.value[25].image.url}
                    articleLink={list.value[25].url}
                    time={props.time}
                />
            </Grid>
        </Grid>

    )}
    else
    {
        return "Loading...";
    }
}

export default MoreForYou;
