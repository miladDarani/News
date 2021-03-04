import React from 'react';

import {Grid, Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import Issue from "../Partials/Issue";
import MainArticleCard from "./MainArticleCard";
import SecondaryArticle from "./SecondaryArticle";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme)=>({
    moreForYouWrapper:{
        padding: theme.spacing(3),

    },
    "& h3": {
        color:"black"
    },
    H1:{
        textAlign:"left",
        color:"#222",
        padding:theme.spacing(3),
        fontFamily: "'Work Sans', sans-serif",
    },
    mainWrapper:{
        background:"white",
    },


}))

const RecommendedIssues = (props)=> {
    const classes = useStyles();
    const {list, isLoaded} = props
    if (Object.keys(list).length > 1) {
        return (
            <Grid container className={classes.mainWrapper}>
                <Grid item xs={12}>
                    <h1 className={classes.H1}>Recommended Issues</h1>
                </Grid>

                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[26].title}
                        imageLink={list.value[26].image.url}
                        articleLink={list.value[26].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[27].title}
                        imageLink={list.value[27].image.url}
                        articleLink={list.value[27].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[28].title}
                        imageLink={list.value[28].image.url}
                        articleLink={list.value[28].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[29].title}
                        imageLink={list.value[29].image.url}
                        articleLink={list.value[29].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />

                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[30].title}
                        imageLink={list.value[30].image.url}
                        articleLink={list.value[30].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[31].title}
                        imageLink={list.value[31].image.url}
                        articleLink={list.value[31].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[32].title}
                        imageLink={list.value[32].image.url}
                        articleLink={list.value[32].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[33].title}
                        imageLink={list.value[33].image.url}
                        articleLink={list.value[33].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[36].title}
                        imageLink={list.value[36].image.url}
                        articleLink={list.value[36].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[41].title}
                        imageLink={list.value[41].image.url}
                        articleLink={list.value[41].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[42].title}
                        imageLink={list.value[42].image.url}
                        articleLink={list.value[42].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[37].title}
                        imageLink={list.value[37].image.url}
                        articleLink={list.value[37].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[38].title}
                        imageLink={list.value[38].image.url}
                        articleLink={list.value[38].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[39].title}
                        imageLink={list.value[39].image.url}
                        articleLink={list.value[39].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[40].title}
                        imageLink={list.value[40].image.url}
                        articleLink={list.value[40].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>

                <Hidden only={['md']}>
                <Grid className={classes.moreForYouWrapper} item xs={6} sm={6} md={4} lg={3}>
                    <Issue
                        title={list.value[43].title}
                        imageLink={list.value[43].image.url}
                        articleLink={list.value[43].url}
                        time={props.time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>
                </Hidden>


            </Grid>

        )
    }
    else{
        return "Loading..."
    }
    }




export default RecommendedIssues;
