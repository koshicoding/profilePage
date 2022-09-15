import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ButtonSection from "./components/ButtonSection";
import Portfolio from "./Portfolio";

export default function App() {
  return (
    <div className="container">
      <Portfolio></Portfolio>
    </div>
  );
}
