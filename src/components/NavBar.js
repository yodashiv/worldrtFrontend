import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from "@material-ui/core";
import virusIcon from "../images/virusIcon.svg";
import Link from "@material-ui/core/Link";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent',
        boxShadow: "none",
        position: "static",
        // height: "8vh",
    },
    rootDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spaceBetween",
        width: "100%",
    },
    titleAndLogoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "50%",
    },
    optionsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "50%",
    },
    logoText: {
        color: "#212121",
        fontFamily: "Poppins, serif",
        height: "auto",
        width: "auto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "30px",
        marginRight: "0.75%",
    },
    logoImg: {
        height: "30px",
        width: "30px",
    },
    methodText: {
        color: "#212121",
        fontFamily: "Poppins, serif",
        height: "auto",
        width: "auto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "30px",
        marginRight: "3%",
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        // underline: "none",
    },
    contactText: {
        color: "#212121",
        fontFamily: "Poppins, serif",
        height: "auto",
        width: "auto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "30px",
        marginRight: "3%",
        // whiteSpace: "nowrap"
    },
    shareContainer: {
        "& div": {
            marginRight: "5px"
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "2%",
    }
}));

const TopNavBar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <div className={classes.rootDiv}>
                    <div className={classes.titleAndLogoContainer}>
                        <p className={classes.logoText}>RtWorld</p>
                        <img className={classes.logoImg} src={virusIcon} alt="Logo"/>
                    </div>
                    <div className={classes.optionsContainer}>
                        <div className={classes.shareContainer}>
                            <div>
                                <FacebookShareButton url="rtworld.live">
                                    <FacebookIcon round={true} size={40} logoFillColor="white" />
                                </FacebookShareButton>
                            </div>
                            <div>
                                <TwitterShareButton url="rtworld.live">
                                    <TwitterIcon round={true} size={40} logoFillColor="white" />
                                </TwitterShareButton>
                            </div>
                        </div>
                        <Link
                            // href={"#beginMethodology"}
                            // onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
                            onClick={() => document.getElementById("beginMethodology").scrollIntoView({behavior: "smooth"})}
                            className={classes.methodText}
                        >
                            Methodology
                        </Link>
                        <Link
                            // href={"#beginFAQ"}
                            onClick={() => document.getElementById("beginMethodology").scrollIntoView({behavior: "smooth"})}
                            className={classes.contactText}
                        >
                            FAQ
                        </Link>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default TopNavBar;
