import React from 'react';

import {Grid, Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import TrendStory from "./TrendStory";
import Hidden from "@material-ui/core/Hidden";
import SecondaryArticle from "./SecondaryArticle";

const useStyles = makeStyles((theme)=>({
    trendingHeading:{
        color: "#60f1a3",
        textAlign:"left",
        fontFamily:"Assistant, sans-serif",
        [theme.breakpoints.down('xs')]: {
            padding: "5px",
            textAlign: "center",
            marginBottom:"60px",
        },
    },
    grid:{
        padding:theme.spacing(7),
        display:"flex",
        flexDirection:"row",

    },
    storyHolder:{
        display:"flex",
        padding:theme.spacing(1)
    },
    trendStory:{
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            padding: "15px"
        },
    }

}))

const TrendingRow = (props)=>{
    const classes=useStyles();
    const {list, isLoaded,time} = props
    return (

        <Grid container  className={classes.grid}>

                <Grid item xs={12}>
                    <h1 className={classes.trendingHeading}>Trending Stories</h1>
                </Grid>
                {/*---1---*/}
                <Grid className={classes.trendStory} item xs={12} md={4} lg={3}>
                    <TrendStory
                        title={list.value[8].title}
                        imageLink={list.value[8].image.url}
                        articleLink={list.value[8].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"1"}
                    />
                </Grid>
                {/*---2---*/}
                <Grid className={classes.trendStory} item xs={12} md={4} lg={3}>
                    <TrendStory
                        title={list.value[9].title}
                        imageLink={list.value[9].image.url}
                        articleLink={list.value[9].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"2"}
                    />
                </Grid>
                {/*---3---*/}
                <Grid className={classes.trendStory} item xs={12} md={4} lg={3}>
                    <TrendStory
                        title={list.value[10].title}
                        imageLink={list.value[10].image.url}
                        articleLink={list.value[10].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"3"}
                    />
                </Grid>
                {/*---4---*/}
                <Grid className={classes.trendStory} item xs={12} md={4} lg={3}>
                    <TrendStory
                        title={list.value[11].title}
                        imageLink={list.value[11].image.url}
                        articleLink={list.value[11].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"4"}
                    />
                </Grid>
                {/*---5---*/}
                <Grid className={classes.trendStory} item xs={12} md={4} lg={3}>
                    <TrendStory
                        title={list.value[12].title}
                        imageLink={list.value[12].image.url}
                        articleLink={list.value[12].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"5"}
                    />
                </Grid>
                {/*---6---*/}
                <Grid className={classes.trendStory} item xs={12} md={4} lg={3}>
                    <TrendStory
                        title={list.value[13].title}
                        imageLink={list.value[13].image.url}
                        articleLink={list.value[13].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"6"}
                    />
                </Grid>
                {/*---7---*/}
                <Grid className={classes.trendStory} item xs={12} md={4} lg={3}>
                    <TrendStory
                        title={list.value[14].title}
                        imageLink={list.value[14].image.url}
                        articleLink={list.value[14].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"7"}
                    />
                </Grid>
                {/*---8---*/}

                <Grid className={classes.trendStory} item xs={12} md={4} lg={3} >
                    <TrendStory
                        title={list.value[15].title}
                        imageLink={list.value[15].image.url}
                        articleLink={list.value[15].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"8"}
                    />
                </Grid>
            <Hidden only={['lg','xl','sm', 'xs']}>
                <Grid className={classes.trendStory} item xs={12} md={4} lg={3} >
                    <TrendStory
                        title={list.value[16].title}
                        imageLink={list.value[16].image.url}
                        articleLink={list.value[16].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        num={"9"}
                    />
                </Grid>
            </Hidden>

        </Grid>

    )
}

export default TrendingRow;
