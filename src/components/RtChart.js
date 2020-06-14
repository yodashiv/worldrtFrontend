import React from "react";
import {ResponsiveLine} from "@nivo/line";

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

const RtChart = () => {
    return (
        <ResponsiveLine
            data={data}
            margin={{top: 50,
                right: 50,
                bottom: 60,
                left: 80}}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                precision: 'day',
            }}
            xFormat="time:%Y-%m-%d"
            yScale={{
                type: 'linear',
                stacked: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                format: '%b %d',
                tickValues: 'every 3 months',
                legend: 'Time',
                legendOffset: 40,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Rt Value',
                legendOffset: -60,
                legendPosition: 'middle'
            }}
            colors={['#04b507', 'rgb(244, 117, 96)']}
            curve={"natural"}
            pointSize={10}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
        />
    );
};

export default RtChart;
