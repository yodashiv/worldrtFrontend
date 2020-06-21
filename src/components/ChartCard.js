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
        fontSize: "0.7em",
        color: "#686B84",
        margin: "0 0 0 0",
        justifySelf: "center"
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "10%"
    }
};

const ChartCard = ({rtValue, country, data}) => {
    return (
        <div style={styles.wholeChartContainer}>
            <div style={styles.textContainer}>
                <RtValueDisplay rtValue={rtValue}/>
                <p style={styles.countryText}> {country} </p>
            </div>
            <RtChart data={data}/>
        </div>
    );
};

export default ChartCard;
