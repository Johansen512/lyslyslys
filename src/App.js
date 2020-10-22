import React from 'react';
import './App.css';
import SwitchButton from "./Components/SwitchButton";
import Allrooms from "../src/Components/AllRooms"
import Controlpanel from "../src/View/Controlpanel";

function App() {
  return (
    <div className="App">
      <Controlpanel />
      <Allrooms />

        
    </div>
  );
}

export default App;
