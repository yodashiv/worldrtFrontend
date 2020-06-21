import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ChartCard from "./ChartCard";
import {json} from "d3-fetch";

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

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList} cols={3}>
                {tileData.map((tile, index) => (
                    <GridListTile key={index} cols={tile.cols || 1}>
                        <div style={{height:380,}}>
                            <ChartCard rtValue={1.64} country={"United States"}/>
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
