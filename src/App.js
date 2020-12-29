import React, { useState, useEffect } from "react";
import { fetchTimecards } from "./api";
import "./App.css";
import Timecards from "./Timecards";

function App() {
  const [timecards, setTimecards] = useState([]);
  useEffect(() => {
    let mounted = true;
    fetchTimecards().then((items) => {
      if (mounted) {
        setTimecards(items);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="App">
      <header>
        <p>BetterBooker</p>
      </header>
      <Timecards timecards={timecards} />
    </div>
  );
}

export default App;
