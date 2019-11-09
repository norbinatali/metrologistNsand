import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import Documents from "./Documents";
import History from '../components/History'
import Dashboard from "./Dashboard";
import QM from "./QM";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        backgroundImage:"linear-gradient(to right,#000222, rgba(23, 20, 61, 0.96),  #252529)",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 2,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        height: 240,
        width: `calc(100% - ${drawerWidth}px)`,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));


const posts =[
    {
        title: "History",
        excerpt: "Click to read" ,
        image: "https://www.telegraph.co.uk/content/dam/news/2017/03/06/122622178_phonics-childrens-book-RESTRICTED-NEWS_trans_NvBQzQNjv4BqQQvqFiVUHlSSVb54S2WIQGPtpG2rpxwg2sf2hr0tdps.jpg?imwidth=450",
link:"<History/>"
    },
    {
        title: "Conformity assessment",
        excerpt: "Click to read",
        image: "https://www.independentaudit.com/wp-content/uploads/2019/06/IAL-Board-Evaluation-Self-Assessment-Questionnaire-Software.jpg",

    },
    {
        title: "Quality management",
        excerpt: "Click to read",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjowhq8-Bzjsv8_i6dtpKUIMX5mK_guaqyAESfc_VyfONcTgNV&s"
    },
];
export default function MetrologistInfo() {
    const classes = useStyles();
    const [component, setComponent] = React.useState(' ');


        return(
<div style={{display:"flex"}}>

            <div style={{ marginTop: 40, padding: 30 }}>
                <Typography variant="h5" component="h2">Metrology</Typography>
                <div style={{ marginTop: 20, padding: 60 }}>
                <Grid container spacing={3} justify="center" style={{display: 'inline-flex'}}>


                        <Grid item xs={4} sm={3} style={{backgroundColor:'transparent'  }} >

                    <Card >
                        <CardActionArea>
                            <CardMedia component="img" alt="Contemplative Reptile" height="140" image="https://www.telegraph.co.uk/content/dam/news/2017/03/06/122622178_phonics-childrens-book-RESTRICTED-NEWS_trans_NvBQzQNjv4BqQQvqFiVUHlSSVb54S2WIQGPtpG2rpxwg2sf2hr0tdps.jpg?imwidth=450"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">{posts.title}</Typography>
                                <Typography component="p">{posts.excerpt}</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small"  color="primary" onClick={()=> setComponent('history')}>Learn More</Button>
                        </CardActions>
                    </Card></Grid>
                            <Grid item xs={4} sm={3} style={{backgroundColor:'transparent'  }} >
                            <Card >
                                <CardActionArea>
                                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="https://www.independentaudit.com/wp-content/uploads/2019/06/IAL-Board-Evaluation-Self-Assessment-Questionnaire-Software.jpg"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"></Typography>
                                        <Typography component="p"></Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small"  color="primary" onClick={()=> setComponent('assesment')}>Learn More</Button>
                                </CardActions>
                            </Card>
                            </Grid>
                    <Grid item xs={4} sm={3} style={{backgroundColor:'transparent'  }} >
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjowhq8-Bzjsv8_i6dtpKUIMX5mK_guaqyAESfc_VyfONcTgNV&s"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"></Typography>
                                        <Typography component="p"></Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small"  color="primary" onClick={()=> setComponent('qm')}>Learn More</Button>
                                </CardActions>
                            </Card>

                        </Grid>

</Grid>

                </div>






            </div>

    <main style={{ flexGrow: 1, height: '100vh', overflow: 'auto'}}>
        <div style={{}}>

    
        </div>
    </main>

    </div>


        )


};

