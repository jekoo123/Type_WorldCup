import React from "react";
import "./main.css"
import { Link } from "react-router-dom";
export const Main = () =>{
  return(
    <div className="mainpage_container">
      <Link to="/worldcup" className="start_button">Start</Link>
    </div>
  );

}

