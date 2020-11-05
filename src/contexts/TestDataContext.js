import React, { createContext, useState } from "react";

export const testDataContext = createContext();


const DataContextProvider = (props) => {
    
    const [lampcolor, setLampcolor]= useState("#ff0000")

    
    console.log(lampcolor)
    return (<testDataContext.Provider value={{ lampcolor, setLampcolor }}>

    {props.children}
    </testDataContext.Provider>

    );
};
 
export default DataContextProvider;