import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();


const DataContextProvider = (props) => {
    const [data, setData] = useState(null);
    const [lampcolor, setLampcolor]= useState("#ff0000")

    useEffect(() => {
        fetch("http://localhost:3000/data/stuff.json")
        .then (response => response.json())
        .then (result => setData(result.stuff))
    }, []);
    
    data && console.log(data)
    console.log(lampcolor)
    return (<dataContext.Provider value={{ data, lampcolor, setLampcolor }}>

    {props.children}
    </dataContext.Provider>

    );
};
 
export default DataContextProvider;