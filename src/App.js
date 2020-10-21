import React from 'react';
import './App.css';
import SwitchButton from "./Components/SwitchButton";

function App() {
  return (
    <div className="App">
      
      <SwitchButton label={"test"} />
      <SwitchButton label={"test2"} primeStyle={"primeStyle--big"}/>
      <SwitchButton label={"test3"} primeStyle={"primeStyle--scene"}/>
        
    </div>
  );
}

export default App;
