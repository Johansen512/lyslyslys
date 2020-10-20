/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";


export const types = {
    light: {
        textColor: "#000",
        backgroundColor: "#fff"
    },
    dark: {
        textColor: "#fff",
        backgroundColor: "#333"
    }
}


const MyContext = React.createContext("light");

export default MyContext;
  
  