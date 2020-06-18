import React from "react";
import TopNavBar from "../components/NavBar";
import RtDescriptionCard from "../components/RtDescriptionCard";
import tableDiscussion from "../images/tableDiscussion.svg";
import RtMap from "../components/RtMap";
import ChartCard from "../components/ChartCard";
import Footnote from "../components/Footnote";
import "./Home.css";
import AllChartCards from "../components/AllChartCards";

const Home = () => {
    return (
        <div className="homeContainer">
            <TopNavBar/>
            <div className="rtDescriptionAndImg">
                <div style={{width: "40%", marginLeft: "16px"}}>
                    <RtDescriptionCard/>
                </div>
                <div className="tableDiscussionImgContainer">
                    <img src={tableDiscussion} alt={"Table Discussion"}/>
                </div>
            </div>
            <div className="rtMapContainer">
                <RtMap/>
            </div>
            <div>
                {/*<ChartCard rtValue={1.64} country={"United States"}/>*/}
                <AllChartCards/>
            </div>
            <div>
                <Footnote/>
            </div>
        </div>
    );
};

export default Home;
