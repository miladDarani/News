import React, {useState} from 'react';
import './css/Home.css'
import SideMenu from "./SideMenu";
import NewsFeed from "./NewsFeed";
import Hidden from "@material-ui/core/Hidden";
import {Grid} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import Header from "./Header";
import BottomMenu from "./BottomMenu";
import MobileMenu from "./MobileMenu";

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
    },
    bottomMenu:{
        position: 'fixed',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'white',
        flexDirection:'row',
        height:120,
        alignItems:'center',
        zIndex:90,

    }

}))


const Home = (props) => {

    const [query, setQuery] = useState("tech");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadedBottom, setIsLoadedBottom] = useState(false);
    const [list, setList] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const classes=useStyles();

    const gotoPage =(e)=>{
       const sidemenuArray = [
            "Today",
           "Technology",
           "Politics",
           "Science",
           "Entertainment"
        ]
        for( let i = 0 ; i <sidemenuArray.length; i++){

            if(e === sidemenuArray[i]) {
                if (document.getElementById(e)) {
                    document.getElementById(sidemenuArray[i]).style.backgroundColor = "transparent";
                    document.getElementById(e).style.backgroundColor = "#777";
                    document.getElementById(e).style.padding = "5px";
                    document.getElementById(e).style.borderRadius = "7px";
                }
            }
        }
        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${e}&pageNumber=1&pageSize=45&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "816549a270msh87585c15fe1e870p18c012jsn065e7fe85302",
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }

            }).then(response => response.json())
                .then(json => {
                    setIsLoaded(true)
                    setList(json)
                })
            setIsLoaded(false)


    }

    const searchQuery = (value) =>{
        console.log("SEARCH")
        setQuery(value.target.value)
        if(value.key === 'Enter'){

            console.log(value.target.value);
            fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${value.target.value}&pageNumber=1&pageSize=45&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "816549a270msh87585c15fe1e870p18c012jsn065e7fe85302",
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
                }

            }).then(response => response.json())
                .then(json => {
                    setIsLoaded(true)
                    setList(json)
                })
            setIsLoaded(false)
        }


    }
    const addDefaultSrc =(ev)=>{
        ev.target.src = 'article_placeholder.png'
    }
    const toggleMenu =(e) => {
        setIsExpanded(!isExpanded)
    }
    const gotoTech = () => {
        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=Technology&pageNumber=1&pageSize=45&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "816549a270msh87585c15fe1e870p18c012jsn065e7fe85302",
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }

        }).then(response => response.json())
            .then(json => {
                setIsLoaded(true)
                setList(json)
            })
        setIsLoaded(false)
    }
    const gotoPolitics = () => {
        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=Politics&pageNumber=1&pageSize=45&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "816549a270msh87585c15fe1e870p18c012jsn065e7fe85302",
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }

        }).then(response => response.json())
            .then(json => {
                setIsLoaded(true)
                setList(json)
            })
        setIsLoaded(false)
    }
    const gotoEntertainment = () => {
        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=Entertainment&pageNumber=1&pageSize=45&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "816549a270msh87585c15fe1e870p18c012jsn065e7fe85302",
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }

        }).then(response => response.json())
            .then(json => {
                setIsLoaded(true)
                setList(json)
            })
        setIsLoaded(false)
    }
    const gotoScience = () => {
        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=Science&pageNumber=1&pageSize=45&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "816549a270msh87585c15fe1e870p18c012jsn065e7fe85302",
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }

        }).then(response => response.json())
            .then(json => {
                setIsLoaded(true)
                setList(json)
            })
        setIsLoaded(false)
    }
    //DATE
    let month = [];
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
    let d = new Date();
    let day = d.getDate()
    let n = month[d.getMonth()];
    let time = n + " " + day;

    React.useEffect(() => {
        console.log("BEER")
        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=1&pageSize=45&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "816549a270msh87585c15fe1e870p18c012jsn065e7fe85302",
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }
        }).then(response => response.json())
            .then(json => {
                setIsLoaded(true)
                setList(json)
            })
    }, []);



    return (
        <Grid container className={"home-wrapper"}>
            {/* ----MOBILE MENU---- */}
            <Hidden only={['md','lg','xl']}>
                <Grid item xs={12}>
                    <Header
                        searchQuery={searchQuery}
                        toggleMenu={toggleMenu}

                    />
                </Grid>

            </Hidden>
            <Hidden only={['md','lg','xl']}>
                <Grid item xs={12} >
                    {isExpanded ? (
                        <MobileMenu />
                    ):null}


                </Grid>

            </Hidden>
            {/* ---- BOTTOM MOBILE MENU---- */}
            <Hidden only={['md','lg','xl']}>
                <Grid item xs={12} className={classes.bottomMenu}>
                    <BottomMenu
                        list={list}
                        isLoaded={isLoaded}
                        gotoTech={gotoTech}
                        gotoPolitics={gotoPolitics}
                        gotoScience={gotoScience}
                        gotoEntertainment={gotoEntertainment}
                    />
                </Grid>
            </Hidden>




            <Hidden only={['xs','sm']}>
                <Grid item md={3}  lg={2} className={'side-menu'}>

                    <SideMenu
                        list={list}
                        isLoaded={isLoaded}
                        searchQuery={searchQuery}
                        gotoPage={gotoPage}
                    />

                </Grid>
            </Hidden>


            <Grid item xs={12} md={9} lg={10} className={"home-body"}>
                <Grid item className={"title-bar"} xs={12}>
                    <h1 className={classes.H1}>News</h1>
                    <h1 className={classes.H1}>{n} {day}</h1>
                </Grid>


                <Grid item className={"banner"} xs={12}>
                    <h1>Top Stories</h1>
                    <h3>Latest news:</h3>
                </Grid>
                <NewsFeed
                    list={list}
                    isLoaded={isLoaded}
                    isLoadedBottom={isLoadedBottom}
                    searchQuery={searchQuery}
                    addDefaultSrc={addDefaultSrc}
                    query={query}
                />
            </Grid>

        </Grid>
    );
}

export default Home