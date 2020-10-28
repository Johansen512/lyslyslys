import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import SceneButton from "./Components/SceneButton";
import Allrooms from "./Components/AllRooms"
import Mainview from "./View/Mainview";
import Roomview from "./View/Roomview";
import DataContextProvider from "./contexts/DataContext"
import DataContext from "./contexts/DataContext"



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
