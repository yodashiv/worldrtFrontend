import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from "@material-ui/core";
import virusIcon from "../images/virusIcon.svg";
import Link from "@material-ui/core/Link";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

const useStyles = makeStyles({
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "3%",
    }
});

const TopNavBar = () => {
    const classes = useStyles();
    return (
        // <div className="navContainer">
        //     <p className="tracText">TRAC</p>
        //     <img className="landingPageImg" src={Logo} alt="Analytics Image"/>
        // </div>
        <AppBar className={classes.root}>
            <Toolbar>
                <div className={classes.rootDiv}>
                    <div className={classes.titleAndLogoContainer}>
                        <p className={classes.logoText}>WorldRt</p>
                        <img className={classes.logoImg} src={virusIcon} alt="Logo"/>
                    </div>
                    <div className={classes.optionsContainer}>
                        <div className={classes.shareContainer}>
                            <div>
                                <FacebookShareButton url="rtworld.com">
                                    <FacebookIcon round={true} size={40} logoFillColor="white" />
                                </FacebookShareButton>
                            </div>
                            <div>
                                <TwitterShareButton url="rtworld.com">
                                    <TwitterIcon round={true} size={40} logoFillColor="white" />
                                </TwitterShareButton>
                            </div>
                        </div>
                        <Link href={"#beginMethodology"} className={classes.methodText}>Methodology</Link>
                        <Link href={"#beginFAQ"} className={classes.contactText}>FAQ</Link>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default TopNavBar;
