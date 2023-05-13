import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const [pagename, setPagename] = useState("Main Page");
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/worldcup":
        setPagename("World Cup");
        break;
      case "/ranking":
        setPagename("Ranking");
        break;
      default:
        setPagename("Main Page");
    }
  }, [location]);

  return (
    <div className="header">
      <div className="pagename">{pagename}</div>
      <div className="nav_container">
        <Link to="/" className="nav">Go to main</Link>
        <Link to="/ranking" className="nav">Go to Ranking</Link>
      </div>
    </div>
  );
};
