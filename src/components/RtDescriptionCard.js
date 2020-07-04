import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: "#FEF7F1",
        boxShadow: "none",
        borderRadius: "20px",
    },
    title: {
        fontSize: "1.1em",
        fontFamily: "Poppins, Roboto, sansSerif",
    },
    descriptionText: {
        fontSize: "1em",
        fontFamily: "Poppins, Roboto, sansSerif",
    }
});

const descriptionText = "Rt is a statistically derived number that offers us a tool to evaluate the growth of COVID-19.  It describes the number of healthy people who are infected by a person with the virus (i.e. if every person in a country with COVID-19 infects 4 other people, the Rt value would be 4.0). An Rt value of 1.0 or higher means the virus will grow exponentially while an Rt value below 1.0 means the virus will eventually die out.";

export default function RtDescriptionCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    What is Rt?
                </Typography>
                <Typography variant="body1" component="p">
                    {descriptionText}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => window.open("https://qz.com/1834700/rt-the-real-time-r0-guiding-how-to-lift-coronavirus-lockdowns/", "_blank")}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
