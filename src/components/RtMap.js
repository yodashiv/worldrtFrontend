import React, { memo, useState, useEffect } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import { csv, json } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import ReactTooltip from "react-tooltip";

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
        json(`../data/rt.json`).then(data => {
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
                                // const d = data.find(s => s.location === geo.properties.NAME);
                                // console.log(data.ML && data.ML["('China', Timestamp('2020-01-19 00:00:00'))"]);
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
                                    // fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
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

const RtMap = () => {
    const [content, setContent] = useState("");
    return (
        <div>
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
};

export default memo(RtMap);
