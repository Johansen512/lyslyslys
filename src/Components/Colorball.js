/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useContext } from "react";

import { dataContext } from "../contexts/DataContext"


const ColorBall = ({ballcolor, label}) => {

    const ballstyle = css`

    width:1.875rem;
    height:1.875rem;
    background-color:${ballcolor};
    border-radius: 0.875rem;
    border-style:none;
    outline:none;
    
    
    `;

 const {setLampcolor} = useContext(dataContext)

 


 
 

  







    return ( 
        //goes to ControlDisplay x 7 
        <button css={ballstyle} onClick={() => setLampcolor(ballcolor)}>{label}</button>
        
    
    
        );
}
 
export default ColorBall;