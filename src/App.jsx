import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Topbar from "../components/topbar/topbar"
import Sidebar from "../components/sidebar/sidebar"
import Homepage from "../pages/homepage/homepage";
import Gitpage from "../pages/gitpage/gitpage";
import RandomPortsPage from "../pages/portpage/randomPorts";
import "./App.css"
import HttpPage from "../pages/httppage/httpPage";

function App() {
  return (
    <div > 
      <Routers>
        <Topbar/>
        <Sidebar />
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/gitpage" element={<Gitpage />} />
          <Route path="/randomPorts" element={<RandomPortsPage />} />
          <Route path="/httpCode" element={<HttpPage />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
