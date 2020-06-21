import React from "react";
import {ResponsiveLine} from "@nivo/line";

let theme = {
    tooltip: {
        container: {
            background: 'white',
            color: 'black',
            fontSize: '0.6em',
            borderRadius: '2px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
            padding: '5px 9px',
        },
    },
};

const RtChart = (props) => {
    return (
        <ResponsiveLine
            data={props.data}
            margin={{top: 20,
                right: 50,
                bottom: 60,
                left: 50}}
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
                // legend: 'Time',
                // legendOffset: 40,
                // legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                // legend: 'Rt Value',
                // legendOffset: -60,
                // legendPosition: 'middle'
            }}
            // colors={['#04b507', 'rgb(244, 117, 96)']}
            theme={theme}
            colors={["#445a6e"]}
            curve={"natural"}
            enablePoints={false}
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
