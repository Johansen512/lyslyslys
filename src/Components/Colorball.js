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

const [colorfill, setColorfill] = useState ("#ffffff")


console.log (colorfill)

lampfill={colorfill}




    return ( 
        
        <button css={ballstyle} onClick={ e => setColorfill (e.target.lampfill)}>{label}</button>
    );
}
 
export default ColorBall;