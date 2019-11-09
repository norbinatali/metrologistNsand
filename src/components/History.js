import React, { Component } from 'react';
import MenuUser from "../menu/MenuUser";
import {Grid, Typography} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

export default function History() {
const posts={
    title: "",
    excerpt:""


};

    return(
        <div style={{display:'flex'}}>

        <div style={{ marginTop: 40, padding: 30 }}>
            <Typography variant="h5" component="h2">History</Typography>
            <div style={{ marginTop: 20, padding: 60 }}>
                <Grid container spacing={2} justify="center" style={{backgroundColor:"white"}}>
                    <Card>
                    <CardActionArea>
                        <CardMedia component="img" alt="Contemplative Reptile" height="140" image="https://www.telegraph.co.uk/content/dam/news/2017/03/06/122622178_phonics-childrens-book-RESTRICTED-NEWS_trans_NvBQzQNjv4BqQQvqFiVUHlSSVb54S2WIQGPtpG2rpxwg2sf2hr0tdps.jpg?imwidth=450"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{posts.title}</Typography>
                            <Typography component="p">{posts.excerpt}</Typography>
                        </CardContent>

                    </CardActionArea>
                    </Card>
                </Grid>
        </div>
        </div>

        </div>

    )


    }