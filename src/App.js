import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ButtonSection from "./components/ButtonSection";
import Portfolio from "./Portfolio";
import { useState, useEffect } from "react";

export default function App() {
  const [isLightMode, setLightMode] = useState(
    localStorage.getItem("api") || "false"
  );
  const LightMode = () => {
    setLightMode(true);
    if (isLightMode) {
      setLightMode(false);
    }
  };
  useEffect(() => {
    localStorage.setItem("api", isLightMode);
    <Portfolio></Portfolio>;
  }, [isLightMode]);

  return (
    <div className="main">
      <div className="toggle-switch">
        <label>
          <input
            type="checkbox"
            onChange={LightMode}
            checked={isLightMode}
          ></input>
          <span className="slider"></span>
        </label>
      </div>
      {isLightMode === true && (
        <div
          className="container"
          id="light" /* style={{ backgroundColor: "white" }}>*/
        >
          <Portfolio></Portfolio>
        </div>
      )}
      {isLightMode === false && (
        <div className="container" id="dark">
          <Portfolio></Portfolio>
        </div>
      )}
    </div>
  );
}
