import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RtScatter from "./RtScatter";
import RtMap from "./components/RtMap";
import ReactTooltip from "react-tooltip";
import NavBar from "./components/NavBar";
import RtDescriptionCard from "./components/RtDescriptionCard";
import AlternativeSearchBar from "./components/AlternativeSearchBar";
import SearchBar from "./components/SearchBar";
import RtChart from "./components/RtChart";
import ChartCard from "./components/ChartCard";


function App() {
  const [content, setContent] = useState("");
  return (
      // <div>
      //   <RtMap setTooltipContent={setContent} />
      //   <ReactTooltip>{content}</ReactTooltip>
      // </div>
      <ChartCard/>
      // <SearchBar/>
  );
}

export default App;
