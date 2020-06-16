import React from "react";
import RtChart from "./RtChart";
import RtValueDisplay from "./RtValueDisplay";

let value = 1.64;

const styles = {
    wholeChartContainer: {
        width: "100%",
        height: "100%",
    },
    countryText: {
        fontFamily: "Poppins, Roboto, sansSerif",
        fontSize: "1.5em",
        color: "#686B84",
        margin: "0 0 0 0",
        justifySelf: "center"
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
    }
};

const ChartCard = ({rtValue, country}) => {
    return (
        <div style={styles.wholeChartContainer}>
            <div style={styles.textContainer}>
                <RtValueDisplay rtValue={rtValue}/>
                <p style={styles.countryText}> {country} </p>
            </div>
            <RtChart/>
        </div>
    );
};

export default ChartCard;
