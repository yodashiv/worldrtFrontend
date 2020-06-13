import React, { memo, useState, useEffect } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const colorScale = scaleLinear()
    .domain([0.29, 0.68])
    .range(["#ffedea", "#ff5233"]);

const MapChart = ({ setTooltipContent }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        csv(`/vulnerability.csv`).then(data => {
            setData(data);
        });
    }, []);

    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
                                return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { NAME, POP_EST } = geo.properties;
                                        setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                                    // style={{
                                    //     default: {
                                    //         fill: "#D6D6DA",
                                    //         outline: "none"
                                    //     },
                                    //     hover: {
                                    //         fill: "#F53",
                                    //         outline: "none"
                                    //     },
                                    //     pressed: {
                                    //         fill: "#E42",
                                    //         outline: "none"
                                    //     }
                                    // }}
                                />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
