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
import rtMapData from "../data/rtMap.json";

import countries from "i18n-iso-countries";
import i18n_iso_countries from "i18n-iso-countries/langs/en.json";

countries.registerLocale(i18n_iso_countries);
console.log(countries.getNames('en'));

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

console.log(rtMapData);
let maxRt = (Math.max(...Object.values(rtMapData)));

let colorScale = scaleLinear()
    .domain([0.2, maxRt])
    .range(["#ffedea", "#ff5233"]);

const MapChart = ({ setTooltipContent }) => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     json(`../data/rt.json`).then(data => {
    //         setData(data);
    //     });
    // }, []);

    // useEffect(() => {
    //     json(`/rtMap.json`).then(data => {
    //         maxRt = (Math.max(...Object.values(data)));
    //         colorScale = scaleLinear()
    //             .domain([0.2, maxRt])
    //             .range(["#ffedea", "#ff5233"]);
    //         setData(data);
    //     });
    // }, []);


    // useEffect(() => {
    //     csv(`/rt_old.csv`).then(data => {
    //         setData(data);
    //     });
    // }, []);

    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                // const d = data.find(s => s.location === geo.properties.NAME);
                                // const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
                                // let d = data[geo.properties.NAME];
                                // let d = [data].find(country => country["2020-06-20"].iso_code === geo.properties.ISO_A3);
                                // let d = data[countries.getAlpha3Code(geo.properties.NAME, "en")];
                                // console.log(countries.getAlpha3Code(geo.properties.NAME, "en"));
                                let latestRtValue = rtMapData[geo.properties.ISO_A3];
                                // if (d !== undefined) {
                                //     d = d["2020-06-20"];
                                // }
                                return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        // const { NAME, POP_EST } = geo.properties;
                                        const { NAME } = geo.properties;
                                        setTooltipContent(`${NAME} — ${latestRtValue || "No estimate"}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    // fill={d ? colorScale(d["ML"]) : "#F5F4F6"}
                                    fill={latestRtValue ? colorScale(latestRtValue) : "#F5F4F6"}
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
