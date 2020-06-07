import React from "react";
import "./App.css";
import Tab from "./components/tabs";
import StateManager from "./stateManager";
function App() {
  return (
    <div>
      <StateManager>
        <Tab />
      </StateManager>
    </div>
  );
}

export default App;
