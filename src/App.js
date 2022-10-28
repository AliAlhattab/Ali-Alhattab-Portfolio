import "./App.scss";
import "animate.css";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage";
import Projectspage from "./pages/Projectspage";
import Aboutpage from "./pages/Aboutpage";

function App() {
  return (
    <BrowserRouter>
    <div className="group">
      <Nav />
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/projects' element={<Projectspage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
