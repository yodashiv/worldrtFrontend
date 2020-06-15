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
        fontSize: "20px",
        color: "#686B84",
        margin: "0 0 0 0",
    },
    rtValueText: {
        fontFamily: "Poppins, Roboto, sansSerif",
        fontSize: "20px",
        color: (value >= 1) ? "#c24c4e" : "#5edb69",
        margin: "0 0 0 0",
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
    }
};

const ChartCard = () => {
    return (
        <div style={styles.wholeChartContainer}>
            <div style={styles.textContainer}>
                {/*<p style={styles.rtValueText}> 1.64 </p>*/}
                <RtValueDisplay rtValue={1.64}/>
                <p style={styles.countryText}> United States</p>
            </div>
            <RtChart/>
        </div>
    );
};

export default ChartCard;
