import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

let value = 1.64;

const useStyles = makeStyles({
    root: {
        width: 80,
        height: 60,
        marginRight: "2%",
    },
    rtValueText: {
        fontSize: "1em",
        textAlign: "center",
        fontFamily: "Poppins, Roboto, sansSerif",
        color: (value >= 1) ? "#c24c4e" : "#5edb69",
    },
});

export default function RtValueDisplay({rtValue}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.rtValueText}>
                    {rtValue}
                </Typography>
            </CardContent>
        </Card>
    );
}
