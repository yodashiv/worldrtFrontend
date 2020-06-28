import React from "react";
import {ResponsiveLine} from "@nivo/line";
import { Defs } from '@nivo/core';
import { area, curveMonotoneX, curveNatural } from 'd3-shape';
import SliceTooltip from "./chartUtils";

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
    let { series, xScale, yScale, innerHeight, data } = props;

    const adjustTimeZone = (dateObj) => {
        return null;
    };

    const areaGenerator = area()
        .x((d => xScale(d.data.x)))
        .y0((d, i) => Math.min(innerHeight, yScale(props.data[0].low50[i].y)))
        .y1((d, i) => Math.min(innerHeight, yScale(props.data[0].high50[i].y)))
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

    let color = "#edb668";
    // let color = "#8caacf";

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
                d={areaGenerator(series[0].data)}
                // d={areaGenerator(series[0].meanLowHighData)}
                // fill="url(#pattern)"
                fill={color}
                fillOpacity={0.2}
                stroke={color}
                strokeWidth={1}
            />
        </>
    )
};

const RtChart = (props) => {
    // console.log(props.data);
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
                // useUTC: false
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
                // tickValues: `every ${Math.round(props.data[0].data.length / 3)} days`,
                tickValues: 3
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
            sliceTooltip={SliceTooltip}
            // sliceTooltip={({ slice }) => {
            //     console.log(slice);
            //     return (
            //         <div
            //             style={{
            //                 background: 'white',
            //                 border: '1px solid #ccc',
            //             }}
            //         >
            //             <div>{slice.points[0].serieId}: {slice.points[0].data.y}</div>
            //             {slice.points.map(point => (
            //                 <div
            //                     key={point.id}
            //                     style={{
            //                         color: point.serieColor,
            //                         padding: '3px 0',
            //                     }}
            //                 >
            //                     <strong>{point.data.x.toLocaleDateString()}</strong>
            //                 </div>
            //             ))}
            //         </div>
            //     )
            // }}
            lineWidth={2}
            theme={theme}
            colors={["#445a6e"]}
            curve={"monotoneX"}
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
                'crosshair',
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
