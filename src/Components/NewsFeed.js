import React, {useState} from 'react';
import './css/NewsFeed.css'
import MainArticleCard from "./NewsFeed/MainArticleCard";
import {CircularProgress, Grid, Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import SecondaryArticle from "./NewsFeed/SecondaryArticle";
import TrendingRow from "./NewsFeed/TrendingRow";
import Spotlight from "./Spotlight/Spotlight";
import MoreForYou from "./NewsFeed/MoreForYou";
import RecommendedIssues from "./NewsFeed/RecommendedIssues";


const useStyles = makeStyles((theme)=>({
    feedWrapper:{
        padding: theme.spacing(3),
    },
    secondaryRow: {
        display:"flex",
        padding:theme.spacing(1),
        borderBottom:"1px solid #777",
        marginBottom:"40px",
    },
    secondaryRowGrid:{
        padding: theme.spacing(1),
    },
    trendingRow: {

        background: 'linear-gradient(141deg, rgba(50,50,50,1) 0%, rgba(0,0,0,1) 47%, rgba(100,100,100,1) 100%)',
        margin:'0',

    },
    H1:{
        fontFamily: "Assistant, sans-serif",
    }

}))



const NewsFeed = (props) => {
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";



    const classes=useStyles();




    var d = new Date();
    var day = d.getDate()
    var n = month[d.getMonth()];
    let time = n + " " + day;
    const {list, isLoaded, query, isLoadedBottom} = props





    if(isLoaded === true && Object.keys(list).length > 1 ){
        return (

            <Grid container className={"news-feed-wrapper"}>




                <Grid className={classes.feedWrapper} item  xs={12} sm={6}>
                    <MainArticleCard
                        title={list.value[0].title}
                        imageLink={list.value[0].image.url}
                        articleLink={list.value[0].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>

                <Grid item className={classes.feedWrapper} xs={12} sm={6}>
                    <MainArticleCard
                        title={list.value[1].title}
                        imageLink={list.value[1].image.url}
                        articleLink={list.value[1].url}
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                    />
                </Grid>


                {/*    SECONDARY ROW    */}
                <Grid container className={classes.secondaryRow}>
                    <Grid className={classes.secondaryRowGrid} item xs={12} md={6} lg={4} xl={3}>
                        <SecondaryArticle
                            title={list.value[2].title}
                            imageLink={list.value[2].image.url}
                            articleLink={list.value[2].url}
                            time={time}
                            addDefaultSrc={props.addDefaultSrc}
                        />
                    </Grid>
                    <Grid className={classes.secondaryRowGrid} item xs={12} sm={6} md={6} lg={4} xl={3}>
                        <SecondaryArticle
                            title={list.value[3].title}
                            imageLink={list.value[3].image.url}
                            articleLink={list.value[3].url}
                            time={time}
                            addDefaultSrc={props.addDefaultSrc}
                        />
                    </Grid>
                    <Grid className={classes.secondaryRowGrid} item xs={12} sm={6} md={6} lg={4} xl={3}>
                        <SecondaryArticle
                            title={list.value[4].title}
                            imageLink={list.value[4].image.url}
                            articleLink={list.value[4].url}
                            time={time}
                            addDefaultSrc={props.addDefaultSrc}
                        />
                    </Grid>
                    <Grid className={classes.secondaryRowGrid} item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <SecondaryArticle
                            title={list.value[5].title}
                            imageLink={list.value[5].image.url}
                            articleLink={list.value[5].url}
                            time={time}
                            addDefaultSrc={props.addDefaultSrc}
                        />
                    </Grid>
                    <Grid className={classes.secondaryRowGrid} item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <SecondaryArticle
                            title={list.value[6].title}
                            imageLink={list.value[6].image.url}
                            articleLink={list.value[6].url}
                            time={time}
                            addDefaultSrc={props.addDefaultSrc}
                        />
                    </Grid>
                    <Grid className={classes.secondaryRowGrid} item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <SecondaryArticle
                            title={list.value[7].title}
                            imageLink={list.value[7].image.url}
                            articleLink={list.value[7].url}
                            time={time}
                            addDefaultSrc={props.addDefaultSrc}
                        />
                    </Grid>

                </Grid>
                {/*    TRENDING ROW    */}

                <Grid item xs={12} className={classes.trendingRow}>
                    <TrendingRow
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        list={list}
                    />
                </Grid>


                {/*    SPOTLIGHT ROW    */}
                <Grid item xs={12} className={classes.spotlightRow}>
                    <Spotlight
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        title={list.value[17].title}
                        articleLink={list.value[17].url}
                        description={list.value[17].description}
                        query={query}
                    />
                </Grid>

                {/*    MADE FOR YOU ROW    */}
                <Grid item xs={12} className={classes.trendingRow}>
                    <MoreForYou
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        list={list}
                    />
                </Grid>

                {/*    RECOMMENDED ISSUES   */}
                <Grid item xs={12} className={classes.trendingRow}>
                    <RecommendedIssues
                        time={time}
                        addDefaultSrc={props.addDefaultSrc}
                        list={list}
                    />
                </Grid>

            </Grid>
        )
    }
    else{
        return (
            <div className={"circle-loading"} style={{marginTop:"190px"}}>
                <CircularProgress color="secondary" size="2em" />
            </div>
        )

    }
}

export default NewsFeed