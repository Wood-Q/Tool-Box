import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Topbar from "../components/topbar/topbar"
import Sidebar from "../components/sidebar/sidebar"
import Homepage from "../pages/homepage/homepage";
import Gitpage from "../pages/gitpage/gitpage";
import RandomPortsPage from "../pages/portpage/randomPorts";
import "./App.css"
import HttpPage from "../pages/httppage/httpPage";
import UpperLowerPage from "../pages/upperlowerPage/ulpage";
import WeatherPage from "../pages/weatherpage/weatherPage";

function App() {
  return (
    <div>
      <Routers>
        <Topbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gitpage" element={<Gitpage />} />
          <Route path="/randomPorts" element={<RandomPortsPage />} />
          <Route path="/httpCode" element={<HttpPage />} />
          <Route path="/UpLow" element={<UpperLowerPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
