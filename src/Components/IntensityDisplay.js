/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useContext  } from "react";
import { dataContext } from "../contexts/DataContext"

//Slider til lysstyrke ... går til ControlDisplay

const IntensityDisplay = ({props}) => {

  const style= css`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  
  
  
  `;



const sliderstyle = css`
  
appearance: none;
background-color: #CECECE;
height: 0.1rem;
width: 260px;
margin: 0 1rem;
outline:none;


`;

/*const sliderstyleFocus = css({
  
  
  '&Focus': '#ff0000',
  
  });*/



const imgstyle = css`



padding: 0 0.2rem;



`;

/*const sliderstyleFocus=css`

({&Focus:#FFD339})

`;*/

const [intensity, setIntensity] = useState ("0")
const {setOpac} = useContext(dataContext)

function OpacSlider (e){
console.log (intensity/100)
//setOpac = (intensity)/100;
//console.log (setOpac)

//e => setIntensity (e.target.value)
setIntensity (e.target.value)
setOpac (intensity/100)
}



    return ( 
       <div css={style}>
      <img css={imgstyle} src="../img/bulbOff.png" alt="Light"/><input css={sliderstyle} type="range" min="0" max="100" 
      value={intensity} onChange={ OpacSlider }step="1"/><img css={imgstyle} src="../img/bulbOn.png" alt="Light"/></div>
      
    );
}
 
export default IntensityDisplay;