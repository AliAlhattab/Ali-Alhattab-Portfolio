import "./App.scss";
import "animate.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { SliderData } from "./components/Projects/SliderData";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="group">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
