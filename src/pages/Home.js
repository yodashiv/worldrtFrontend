import React from "react";
import TopNavBar from "../components/NavBar";
import RtDescriptionCard from "../components/RtDescriptionCard";
import tableDiscussion from "../images/tableDiscussion.svg";
import RtMap from "../components/RtMap";
import ChartCard from "../components/ChartCard";

const Home = () => {
    return (
        <div>
            <TopNavBar/>
            <div>
                <RtDescriptionCard/>
                <img src={tableDiscussion} alt={"Table Discussion"}/>
            </div>
            <div>
                <RtMap/>
            </div>
            <div>
                <ChartCard rtValue={1.64} country={"United States"}/>
            </div>
        </div>
    );
};

export default Home;
