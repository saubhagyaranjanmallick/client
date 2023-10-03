import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/> 
      <Route path="landing" element={<Landing/>}/> 
      <Route path="home" element={<Home/>}/> 


    </Routes>
  );
}

export default App;
