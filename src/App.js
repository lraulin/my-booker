import React, { useState, useEffect } from "react";
import { fetchTimecards } from "./api";
import "./App.css";
import Timecards from "./Timecards";
import ViewTimecard from "./ViewTimecard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  const [timecards, setTimecards] = useState([]);
  const [selectedTimecard, setSelectedTimecard] = useState();

  useEffect(() => {
    let mounted = true;
    fetchTimecards().then((items) => {
      if (mounted && items) {
        setTimecards(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/timecards">
            Timecards
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/timecards" exact>
          <Timecards
            timecards={timecards}
            setSelectedTimecard={(tc) => setSelectedTimecard({ ...tc })}
          />
        </Route>
        <Route path="/timecards/view">
          <ViewTimecard tc={selectedTimecard}></ViewTimecard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
