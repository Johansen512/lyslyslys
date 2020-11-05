/** @jsx jsx */
import { css, jsx  } from "@emotion/core";
import { useContext } from "react";

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

 

 /*tokenCode = data.access_token;
 localStorage.setItem("token", tokenCode);*/

 
function Test (){
    setLampcolor(ballcolor)
    console.log ("tootoooot")
}

 
 

  







    return ( 
        //goes to ControlDisplay x 7 
        <button css={ballstyle} onClick={() => setLampcolor(ballcolor)}>{label}</button>
        
     
        
    
        );
}
 
export default ColorBall;