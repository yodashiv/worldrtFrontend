import React from 'react';

import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const RtScatter = () => {
    let data = [
        {
            "Country": "United States",
            "Rt": 1.01,
        },
        {
            "Country": "China",
            "Rt": 0.56,
        },
        {
            "Country": "Germany",
            "Rt": 1.12,
        },
        {
            "Country": "UK",
            "Rt": 0.87,
        },
        {
            "Country": "France",
            "Rt": 1.08,
        }
    ];
    const theme = {
        // fontSize: "20px",
        background: "#ffffff",
        axis: {
            fontSize: "32px",
            tickColor: "#eee",
            ticks: {
                line: {
                    stroke: "#555555"
                },
                text: {
                    fontSize: "32px",
                    fill: "#ffffff"
                }
            },
            legend: {
                text: {
                    fontSize: "32px",
                    fill: "#aaaaaa"
                }
            }
        },
        grid: {
            line: {
                stroke: "#555555"
            }
        },
        legends: {
            text: {
                fontSize: "32px"
            }
        }
    };
    const CustomBarComponent = ({ x, y, width, height, color }) => (
        <circle cx={x + width/data.length} cy={y} r={Math.min(width, height) / 20} fill={color} />
    );

    return (
        <ResponsiveBar
            data={data}
            keys={['Rt']}
            indexBy="Country"
            margin={{top: 50, right: 320, bottom: 90, left: 120}}
            padding={0.3}
            groupMode="grouped"
            colors={{scheme: 'nivo'}}
            borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Country',
                legendPosition: 'middle',
                legendOffset: 60
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'RT Value',
                legendPosition: 'middle',
                legendOffset: -90
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
            innerPadding={4}
            barComponent={CustomBarComponent}
            tooltip={({ country, Rt, color }) => (
                <strong style={{ color }}>
                    {country}: {Rt}
                </strong>
            )}
            theme={{
                tooltip: {
                    container: {
                        background: '#333',
                    },
                },
            }}
            // theme={theme}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />);
};

export default RtScatter;
