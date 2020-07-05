import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backgroundContainer: {
        minWidth: "200px",
        width: "100%",
        backgroundColor: "#FEF7F1",
    },
    footNoteContainer: {
        paddingTop: "1%",
        paddingBottom: "2%",
        wordWrap: "overflow-wrap",
        minWidth: "200px",
        [theme.breakpoints.down('xs')]: {
            width: "90%",
        },
        [theme.breakpoints.up('sm')]: {
            width: "60%",
        },
        maxWidth: "100%",
    },
    titleText: {
        fontSize: "1em",
        fontFamily: "Poppins, Roboto, sansSerif",
        fontWeight: 300,
        marginBottom: "0px",
        marginTop: "0.4em",
        marginLeft: "2%",
    },
    explainerText: {
        fontSize:"0.8em",
        fontFamily: "Poppins, Roboto, sansSerif",
        marginBlockStart: "0",
        marginBlockEnd: "0",
        marginLeft: "4%",
    }
}));

const Footnote = () => {
    const classes = useStyles();

    return (
        <div className={classes.backgroundContainer}>
            <div className={classes.footNoteContainer}>
                <h5 id="beginMethodology" className={classes.titleText}> How do we determine Rt?</h5>
                <p className={classes.explainerText}>
                    Rt is a dynamic number that relies on hard-to-measure factors.
                    Thus, at best, we can only estimate the Rt value of a given region
                    through robust statistical techniques. Inspiration for this project
                    comes from Mike Kreiger and Kevin Systrom's <a
                    href={"https://rt.live/"}
                    target={"_blank"}
                >
                    website
                </a>
                    , and the model used
                    here is heavily adapted from theirs. For a more in-depth exploration
                    of the math, please reference <a
                    href={"http://systrom.com/blog/the-metric-we-need-to-manage-covid-19/"}
                    target={"_blank"}
                    >
                    Systrom’s work.
                    </a>
                </p>
                <h5 id="beginFAQ" className={classes.titleText}> Where do we source our data?</h5>
                <p className={classes.explainerText}>
                    Our data comes from Our World In Data, a research effort based out of the University of Oxford.
                    Please note that while we make every effort to source reliable data, lags and errors in reporting can
                    adversely affect testing data.
                </p>
                <h5 className={classes.titleText}> What are the yellow bands on the charts?</h5>
                <p className={classes.explainerText}>
                    Because the Rt value is statistically determined, we cannot be certain that the Rt value
                    revealed by our model reflects reality. Thus, to account for the uncertainty in our model,
                    we include a margin of error in our calculations. This is visually represented as yellow bands.
                </p>
                <h5 className={classes.titleText}> Why does the Rt value oscillate so much?</h5>
                <p className={classes.explainerText}>
                    COVID-19 reporting procedures vary between countries, making it difficult to obtain granular information
                    about cases. There are more powerful models to determine Rt, but unfortunately they require data that simply
                    isn't available for every country. One of the known limitations of our current model is its sensitivity to the
                    data, resulting in the oscillations you see above in the charts.
                </p>
                <h5 className={classes.titleText}> How should this data be used?</h5>
                <p className={classes.explainerText}>
                    The Rt values of countries are meant to provide a rough sense of how the virus is growing
                    in a given country. Please keep in mind that while the Rt value yields valuable insight
                    into the evolution of COVID-19, other metrics should also be considered to form a
                    more complete picture of the situation.
                </p>
                <h5 className={classes.titleText}> My country is faring well, but its Rt value is high. Why?</h5>
                <p className={classes.explainerText}>
                    The Rt value estimates the number of healthy people that contract COVID-19 from an infectious person.
                    Thus, if there is only 1 person with the virus and they infect 5 other people, the Rt value will be 5.0.
                    Because of this, it's important to analyze total case count of a country in tandem with its Rt value.
                </p>
            </div>
        </div>
    );
};

export default Footnote;
