/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext ();


const DataContextProvider = (props) => {
    const [data, setdata] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/data/stuff.json")
        .then (response => response.json())
        .then (result => setdata(result.data))
    }, []);
    data && console.log(data.stuff[0])
    return (<dataContext.Provider value={{ data }}>
<div>tjup tjup</div>
    {props.children}
    </dataContext.Provider>

    );
};
 
export default DataContextProvider;