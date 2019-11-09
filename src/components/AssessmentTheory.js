import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";


export default function AssessmentTheory(){
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
                    <Grid item>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" alt="Contemplative Reptile" height="140" image="https://www.independentaudit.com/wp-content/uploads/2019/06/IAL-Board-Evaluation-Self-Assessment-Questionnaire-Software.jpg"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{posts.title}</Typography>
                                    <Typography component="p">{posts.excerpt}</Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>

                    </Grid>

                </Grid>
            </div>
        </div>

    </div>

)


}