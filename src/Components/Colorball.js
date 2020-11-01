/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";


const ColorBall = ({ballcolor, label, lampfill}) => {

    const ballstyle = css`

    width:1.875rem;
    height:1.875rem;
    background-color:${ballcolor};
    border-radius: 0.875rem;
    border-style:none;
    
    
    `;

 const [colorfill, setColorfill] = useState (ballcolor)

function handleClick(e) {


  
    
    console.log('The link was clicked.') 
    console.log (colorfill)
let lampfill = colorfill
console.log ("hey det er jo " + {lampfill})
}
  







    return ( 
        //goes to ControlDisplay x 7 
        <button css={ballstyle} onClick={handleClick}>{label}</button>
        
    
    
        );
}
 
export default ColorBall;