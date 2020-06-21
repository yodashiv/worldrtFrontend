import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ChartCard from "./ChartCard";
import {json} from "d3-fetch";
import myJsonData from "../data/rt.json";

let tileData = [
    {
        country: "United States",
        rtValue: 1.64,
    },
    {
        country: "United States",
        rtValue: 1.64,
    },
    {
        country: "United States",
        rtValue: 1.64,
    },
    {
        country: "United States",
        rtValue: 1.64,
    },
    {
        country: "United States",
        rtValue: 1.64,
    },
    {
        country: "United States",
        rtValue: 1.64,
    },
];

const formatJson = (jsonData) => {
    let processedData = [];

    for (let [country, countryData] of Object.entries(jsonData)) {
        let countryObj = {};
        countryObj["id"] = country;
        countryObj["data"] = [];
        for (let [date, timeData] of Object.entries(countryData)) {
            let dataPoint = {};
            dataPoint["x"] = date;
            dataPoint["y"] = timeData["ML"];
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
        height: Math.ceil(tileData.length / 3) * 400 + 20,
    },
}));

export default function AllChartCards() {
    const classes = useStyles();

    let processedData = formatJson(myJsonData);

    console.log(processedData);

    const data = [
        {
            id: 'belowOne',
            data: [
                { x: '2018-01-01', y: .80 },
                { x: '2018-02-01', y: .90},
                { x: '2018-03-01', y: .60 },
                { x: '2018-04-01', y: .80 },
                { x: '2018-05-01', y: null },
                { x: '2018-06-01', y: null },
                { x: '2018-07-01', y: null },
                { x: '2018-08-01', y: null },
            ],
        },
        {
            id: 'aboveOne',
            data: [
                { x: '2018-01-01', y: null },
                { x: '2018-02-01', y: null},
                { x: '2018-03-01', y: null },
                { x: '2018-04-01', y: .80 },
                { x: '2018-05-01', y: 1.10 },
                { x: '2018-06-01', y: 1.00 },
                { x: '2018-07-01', y: 1.50 },
                { x: '2018-08-01', y: 1.70 },
            ],
        },
    ];

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList} cols={3}>
                {processedData.map((country, index) => (
                    <GridListTile key={index} cols={country.cols || 1}>
                        <div style={{height:380,}}>
                            <ChartCard rtValue={country.data[data.length -1].y} country={country.id} data={[country] || []}/>
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
