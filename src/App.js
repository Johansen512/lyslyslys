import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import SceneButton from "../src/Components/SceneButton";
import Allrooms from "../src/Components/AllRooms"
import Mainview from "../src/View/Mainview";
import Roomview from "../src/View/Roomview";
import DataContextProvider from "../src/Contexts/DataContext"



function App() {
  return (
    <div className="App">
     
     <DataContextProvider>
      <Router>
                    <Roomview path="/roomview" />
                    <Mainview path="/" />
                </Router>

</DataContextProvider>

        
    </div>
  );
}

export default App;
