import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboards";
import Car from "./pages/Car";
import Home from "./pages/Home";
import ANCar from "./pages/AddToCar";
import EditCarPage from "./pages/EditCarPage";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavbarCar/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/car">
            <Car />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/ancar">
            <ANCar />
          </Route>
          <Route exact path="/editcar">
            <EditCarPage />
          </Route>
          {/* <Route path="/editcar">
            <Detail />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
