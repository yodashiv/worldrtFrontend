import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    backgroundContainer: {
        minWidth: "200px",
        width: "100%",
        backgroundColor: "#FEF7F1",
    },
    footNoteContainer: {
        paddingBottom: "2%",
        wordWrap: "overflow-wrap",
        minWidth: "200px",
        width: "60%",
        maxWidth: "100%",
    },
    titleText: {
        fontSize: "1.2em",
        fontFamily: "Poppins, Roboto, sansSerif",
        fontWeight: 300,
        marginBottom: "0px",
        marginTop: "0.4em",
        marginLeft: "2%",
    },
    explainerText: {
        fontSize:"1em",
        fontFamily: "Poppins, Roboto, sansSerif",
        marginBlockStart: "0",
        marginBlockEnd: "0",
        marginLeft: "4%",
    }
});

const Footnote = () => {
    const classes = useStyles();

    return (
        <div className={classes.backgroundContainer}>
            <div className={classes.footNoteContainer}>
                <h5 className={classes.titleText}> Determining Rt</h5>
                <p className={classes.explainerText}>
                    Rt is a dynamic number that relies on hard-to-measure factors.
                    Thus, at best, we can only estimate the Rt value of a given region
                    through robust statistical techniques. Inspiration for this project
                    comes from Mike Kreiger and Kevin Systrom’s website, and the model used
                    here is heavily adapted from theirs. For a more in-depth exploration
                    of the math, please reference <a
                    href={"http://systrom.com/blog/the-metric-we-need-to-manage-covid-19/"}
                    target={"_blank"}
                    >
                    Systrom’s work.
                    </a>
                </p>
                <h5 className={classes.titleText}> Where do we source our data?</h5>
                <p className={classes.explainerText}>
                    Data comes from lorem ipsum. Please note that while we make every
                    effort to source reliable data, lags and errors in reporting can
                    adversely affect testing data.
                </p>
            </div>
        </div>
    );
};

export default Footnote;
