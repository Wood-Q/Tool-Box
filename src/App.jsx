import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Topbar from "../components/topbar/topbar"
import Sidebar from "../components/sidebar/sidebar"
import Homepage from "../pages/homepage/homepage";
import Gitpage from "../pages/gitpage/gitpage";
import "./App.css"

function App() {
  return (
    <div > 
      <Routers>
        <Topbar/>
        <Sidebar />
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/gitpage" element={<Gitpage />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
