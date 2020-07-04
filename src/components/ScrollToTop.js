import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import {makeStyles} from "@material-ui/core/styles";

const THRESHOLD = 600;

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    divContainer: {
    }
}));

export default function ScrollToTopPill() {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            // if (!props.target.current) {
            //             //     return;
            //             // }
            let targetDistance =
                // -1 * props.target.current.getBoundingClientRect().bottom;
                window.pageYOffset;
            if (targetDistance >= THRESHOLD) {
                setIsShown(true);
            } else {
                setIsShown(false);
            }
        });
    }, []);
    console.log(window.pageYOffset);

    const classes = useStyles();
    return (
      //   <div
      //       style={{
      //           margin: "0 auto",
      //           transition: "top 0.3s",
      //           position: "fixed",
      //           left: "50%",
      //           background: "#5aa3db",
      //           padding: "3 3 3 3",
      //           textAlign: "center",
      //           pointerEvents: "none",
      //           top: isShown ? 20 : -40,
      //       }}
      //   >
      // <span
      //     className="scroll-to-top"
      //     style={{color: "white"}}
      //     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      // >
      //   ↑ Scroll to top
      // </span>
      //   </div>
        <div
            style={{
                margin: "0 auto",
                transition: "top 0.3s",
                position: "fixed",
                left: "50%",
                padding: "3 3 3 3",
                textAlign: "center",
                // pointerEvents: "none",
                top: isShown ? 20 : -60,
                zIndex: "10"
            }}
        >
            <Button
                variant="contained"
                style={{backgroundColor: '#2ea4ff', borderRadius: "10px", color: "white"}}
                className={classes.button}
                startIcon={<ArrowUpward />}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                Scroll To Top
            </Button>
        </div>
    );
}
