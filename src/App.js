import "./App.scss";
import "animate.css";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
    <div className="group">
      <Nav />
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
