import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ChartCard from "./ChartCard";
import {json} from "d3-fetch";
import rtJsonData from "../data/rt.json";

const formatJson = (jsonData) => {
    let processedData = [];

    for (let [country, countryData] of Object.entries(jsonData)) {
        let countryObj = {};
        countryObj["id"] = country;
        countryObj["data"] = [];
        let prevData = [];
        let count = 0;
        for (let [date, timeData] of Object.entries(countryData)) {
            let dataPoint = {};
            dataPoint["x"] = date;
            if (count > 6) {
                prevData.shift();
                prevData.push(timeData["ML"]);
                let sum = prevData.reduce((a, b) => a + b);
                dataPoint["y"] = (sum / 7).toFixed(2);
            } else {
                dataPoint["y"] = timeData["ML"];
                prevData.push(timeData["ML"]);
            }
            count++;
            countryObj["data"].push(dataPoint);
        }
        processedData.push(countryObj);
    }
    return processedData;
};

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
        height: Math.ceil(Object.keys(rtJsonData).length / 3) * 400 + 20,
    },
}));

export default function AllChartCards() {
    const classes = useStyles();

    let processedData = formatJson(rtJsonData);

    console.log(processedData);

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList} cols={3}>
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
