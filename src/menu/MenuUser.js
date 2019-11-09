import React from 'react';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import { fade,makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import PeopleIcon from '@material-ui/icons/People';
import InfoIcon from '@material-ui/icons/Info';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import MaterialTable from 'material-table';
import { mainListItems, secondaryListItems } from '../menu/listitems';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import history from '../history';
import MetrologistInfo from "../components/MetrologistInfo";
import Dashboard from "../components/Dashboard";
import Documents from "../components/Documents";
import History from "../components/History";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AssessmentTheory from "../components/AssessmentTheory";
import QM from "../components/QM";
import Standarts from "../components/Standarts";
import i18n from './translation/i18n';
import { withTranslation } from 'react-i18next';

const drawerWidth = 240;
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
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
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '80%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        border:"1px solid",
        color: 'inherit',
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
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



function MenuUser({t}) {

    const classes = useStyles();
    const [component, setComponent] = React.useState(' ');
    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
                        {t('Metrologist')}
                    </Typography>
                    <div>
                        <button onClick={() => changeLanguage('ua')}>ua</button>
                        <button onClick={() => changeLanguage('en')}>en</button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),}} open={open}>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose} >
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List >
                    <ListItem button onClick={() => setComponent('dashboard')} >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                    <ListItem  button onClick={() => setComponent('metrology')}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Metrology" />
                    </ListItem>
                    <ListItem button onClick={() => setComponent('sand')}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="SAND" />
                    </ListItem>
                    <ListItem button onClick={() => setComponent('forum')}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Forum" />
                    </ListItem>
                    <ListItem button onClick={() => setComponent('apps')}>
                        <ListItemIcon>
                            <ImportantDevicesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Apps" />
                    </ListItem>
        </List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main style={{ flexGrow: 1, height: '100vh', overflow: 'auto'}}>
                <div style={{paddingRight: 24}} />

                {  component === 'account' ?
                        <Dashboard/>
                        :
                        component === 'metrology' ?
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
                                                        <Button size="small"  color="primary" onClick={()=> setComponent('assessment')}>Learn More</Button>
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
                                </div>
                            :
                            component === 'sand' ?
                                <div>
                                    <div style={{ marginTop: 40, padding: 30 }}>
                                        <Typography variant="h5" component="h2">Standards and Devices</Typography>
                                    </div>
                                    <div style={{flexGrow: 1, width: '100%'}}>
                                                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="white" variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" className={classes.tabs}>
                                                    <Tab label="Standards"  {...a11yProps(0)}/>
                                                    <Tab label="Devices" {...a11yProps(1)}/>
                                                    <Tab label="Categoty" {...a11yProps(2)}/>
                                                    <Tab label="Models" {...a11yProps(3)}/>
                                                </Tabs>
                                                <TabPanel value={value} index={0} style={{backgroundColor:"white"}}>
                                                  <Standarts />
                                                </TabPanel>
                                                <TabPanel value={value} index={1} style={{backgroundColor:"white"}}>
                                                    <div className={classes.search}>
                                                        <div className={classes.searchIcon}>
                                                            <SearchIcon />
                                                        </div>
                                                        <InputBase placeholder="Search…" classes={{input: classes.inputInput,}} inputProps={{ 'aria-label': 'search' }}
                                                        />
                                                    </div>
                                                </TabPanel>
                                        <TabPanel value={value} index={2} style={{backgroundColor:"white"}}>
                                            <div className={classes.search}>
                                                <div className={classes.searchIcon}>
                                                    <SearchIcon />
                                                </div>
                                                <InputBase placeholder="Search…" classes={{input: classes.inputInput,}} inputProps={{ 'aria-label': 'search' }}
                                                />
                                            </div>

                                        </TabPanel>
                                        <TabPanel value={value} index={3} style={{backgroundColor:"white"}}>
                                            <div className={classes.search}>
                                                <div className={classes.searchIcon}>
                                                    <SearchIcon />
                                                </div>
                                                <InputBase placeholder="Search…" classes={{input: classes.inputInput,}} inputProps={{ 'aria-label': 'search' }}
                                                />
                                            </div>
                                        </TabPanel>
                                    </div></div>




                                                :
                                component === 'history' ?
                                <History />
                                :
                                component === 'assessment' ?
                    <AssessmentTheory/>
                    :
                                    component === 'qm' ?
                                        <QM />

                    :
                    component === ''
                }

            </main>



        </div>


    );
}
export default withTranslation()(MenuUser);