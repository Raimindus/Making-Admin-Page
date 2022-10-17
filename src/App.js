import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthWrapper from "./component/AuthWrapper";
import ANCar from "./pages/AddToCar";
import Car from "./pages/Car";
import Dashboard from "./pages/Dashboards";
import EditCar from "./pages/EditCar";
import Home from "./pages/Home";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavbarCar/> */}
        <AuthWrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/editcar" element={<EditCar />} />
            <Route exact path="/car" element={<Car />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/ancar" element={<ANCar />} />
          </Routes>
        </AuthWrapper>
      </div>
    </Router>
  );
}

export default App;
