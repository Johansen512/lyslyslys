import React from 'react';
import './App.css';
import SceneButton from "./Components/SceneButton";
import Allrooms from "../src/Components/AllRooms"
import Mainview from "../src/View/Mainview";


function App() {
  return (
    <div className="App">
      <Mainview title={"Controlpanel"}/>
      <SceneButton scene = {"Relax"} />

        
    </div>
  );
}

export default App;
