import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ChartCard from "./ChartCard";
import {json} from "d3-fetch";
import processedData from "../data/rtProcessed.json";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// const buildRtData = (countryObj, countryData, rtLabelJson, rtLabelCountryObj) => {
//     let prevData = [];
//     let count = 0;
//     let filter = 0;
//     for (let [date, timeData] of Object.entries(countryData)) {
//         if (filter < 30) {
//             filter++;
//             continue;
//         }
//         let dataPoint = {};
//         dataPoint["x"] = date;
//         if (count > 6) {
//             prevData.shift();
//             prevData.push(timeData[rtLabelJson]);
//             let sum = prevData.reduce((a, b) => a + b);
//             dataPoint["y"] = (sum / 7).toFixed(2);
//         } else {
//             dataPoint["y"] = timeData[rtLabelJson];
//             prevData.push(timeData[rtLabelJson]);
//         }
//         count++;
//         countryObj[rtLabelCountryObj].push(dataPoint);
//     }
// };
//
// const buildAllDataField = (countryObj) => {
//     countryObj["meanLowHighData"] = [];
//     for (let i = 0; i < countryObj["data"].length; i++) {
//         let allDataRecord = {};
//         allDataRecord["x"] = countryObj["data"][i]["x"];
//         allDataRecord["mean"] = countryObj["data"][i]["y"];
//         allDataRecord["low50"] = countryObj["low50"][i]["y"];
//         allDataRecord["high50"] = countryObj["high50"][i]["y"];
//         countryObj["meanLowHighData"].push(allDataRecord);
//     }
// };
//
// const formatJson = (jsonData) => {
//     let processedData = [];
//
//     for (let [country, countryData] of Object.entries(jsonData)) {
//         let countryObj = {};
//         countryObj["id"] = country;
//         countryObj["data"] = [];
//         countryObj["low50"] = [];
//         countryObj["high50"] = [];
//         buildRtData(countryObj, countryData, "ML", "data");
//         buildRtData(countryObj, countryData, "Low_50", "low50");
//         buildRtData(countryObj, countryData, "High_50", "high50");
//         // let prevData = [];
//         // let count = 0;
//         // for (let [date, timeData] of Object.entries(countryData)) {
//         //     let dataPoint = {};
//         //     dataPoint["x"] = date;
//         //     if (count > 6) {
//         //         prevData.shift();
//         //         prevData.push(timeData["ML"]);
//         //         let sum = prevData.reduce((a, b) => a + b);
//         //         dataPoint["y"] = (sum / 7).toFixed(2);
//         //     } else {
//         //         dataPoint["y"] = timeData["ML"];
//         //         prevData.push(timeData["ML"]);
//         //     }
//         //     count++;
//         //     countryObj["data"].push(dataPoint);
//         // }
//         processedData.push(countryObj);
//     }
//     return processedData;
// };

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        // height: Math.ceil(processedData.length / 3) * 400 + 20,
    },
}));

export default function AllChartCards() {
    const classes = useStyles();
    const theme = useTheme();

    let isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    let isTablet = useMediaQuery(theme.breakpoints.down('sm'));

    const determineCols = () => {
        console.log(theme.breakpoints.down('sm'));
        if (isMobile) {
            return 1;
        } else if (isTablet) {
            return 2;
        } else {
            return 3;
        }
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList} cols={determineCols()}>
                {processedData.map((country, index) => (
                    <GridListTile key={index} cols={country.cols || 1}>
                        <div style={{height:380,}}>
                            <ChartCard rtValue={country.data[country.data.length -1].y} country={country.id} data={[country] || []}/>
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
