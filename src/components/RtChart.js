import React from "react";
import {ResponsiveLine} from "@nivo/line";
import { Defs } from '@nivo/core';
import { area, curveMonotoneX } from 'd3-shape';

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

const AreaLayer = (props) => {
    const { series, xScale, yScale, innerHeight, data } = props;
    console.log(props);
    const areaGenerator = area()
        .x(d => console.log(d) || xScale(d.data.data.x))
        .y0(d => Math.min(innerHeight, yScale(d.low50.y)))
        .y1(d => Math.min(innerHeight, yScale(d.high50.y)))
        .curve(curveMonotoneX);

// const AreaLayer = (props) => {
//     let { series, xScale, yScale, innerHeight } = props;
//     console.log(props);
//
//     const areaGenerator = area()
//         .x(d => console.log(d) || xScale(d.data.x))
//         .y0(d => Math.min(innerHeight, yScale(d.data.y - 40)))
//         .y1(d => yScale(d.data.y + 10))
//         .curve(curveMonotoneX);

    return (
        <>
            <Defs
                defs={[
                    {
                        id: 'pattern',
                        type: 'patternLines',
                        background: 'transparent',
                        color: '#3daff7',
                        lineWidth: 1,
                        spacing: 6,
                        rotation: -45,
                    },
                ]}
            />
            <path
                // d={areaGenerator(series[0].data)}
                d={areaGenerator(series[0])}
                fill="url(#pattern)"
                fillOpacity={0.6}
                stroke="#3daff7"
                strokeWidth={2}
            />
        </>
    )
};

const RtChart = (props) => {
    console.log(props.data);
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
                tickValues: `every ${Math.round(props.data[0].data.length / 3)} days`,
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
            enableSlices={"x"}
            enablePoints={false}
            layers={[
                'grid',
                'markers',
                'areas',
                AreaLayer,
                'lines',
                'slices',
                'axes',
                'points',
                'legends',
            ]}
            pointSize={10}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={false}
        />
    );
};

export default RtChart;
