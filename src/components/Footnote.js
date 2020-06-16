import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footNoteContainer: {
        backgroundColor: "#FEF7F1",
        paddingBottom: "2%",
    },
    titleText: {
        fontSize: "0.6em",
        fontFamily: "Poppins, Roboto, sansSerif",
        fontWeight: 300,
        marginBottom: "0px",
        marginTop: "0.4em",
        marginLeft: "1%",
    },
    explainerText: {
        fontSize:"0.5em",
        fontFamily: "Poppins, Roboto, sansSerif",
        marginBlockStart: "0",
        marginBlockEnd: "0",
        marginLeft: "2%",
    }
});

const Footnote = () => {
    const classes = useStyles();

    return (
        <div className={classes.footNoteContainer}>
            <h5 className={classes.titleText}> Determining Rt</h5>
            <p className={classes.explainerText}>
                Rt is a dynamic number that relies on hard-to-measure factors.
                Thus, at best, we can only estimate the Rt value of a given region
                through robust statistical techniques. Inspiration for this project
                come from Mike Kreiger and Kevin Systrom’s website, and the model used
                here is heavily adapted from theirs. For a more in-depth exploration
                of the math, please reference Systrom’s work.
            </p>
            <h5 className={classes.titleText}> Where do we source our data?</h5>
            <p className={classes.explainerText}>
                Data comes from lorem ipsum. Please note that while we make every
                effort to source reliable data, lags and errors in reporting can
                adversely affect testing data.
            </p>
        </div>
    );
};

export default Footnote;
