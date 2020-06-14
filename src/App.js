import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RtScatter from "./RtScatter";
import RtMap from "./components/RtMap";
import ReactTooltip from "react-tooltip";
import NavBar from "./components/NavBar";


function App() {
  const [content, setContent] = useState("");
  return (
      // <div>
      //   <RtMap setTooltipContent={setContent} />
      //   <ReactTooltip>{content}</ReactTooltip>
      // </div>
      <NavBar/>
  );
}

export default App;
