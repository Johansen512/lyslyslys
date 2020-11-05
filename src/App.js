import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Mainview from "./View/Mainview";
import Roomview from "./View/Roomview";
import DataContextProvider from "./contexts/DataContext"




function App(props) {
 
  
  return (
    <div className="App">
     
     <DataContextProvider>
      <Router >
                    <Roomview path="/roomview/:id"/>
                    <Mainview path="/" />
                </Router>

</DataContextProvider>

        
    </div>
  );
}

export default App;
