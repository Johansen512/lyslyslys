/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { dataContext } from "../contexts/DataContext"
import { useContext } from "react"

const Colorpicker = () => {

    const {picker }=useContext(dataContext)
    console.log ("hey det er jo colorpicker funktionen som er:" + (picker))
    
    


    const style = css`
    background-color: blue;
    opacity:0.5;
    width:375px;
    height:50px;
    z-index:100;
    position: absolute;
    top:230px;
    
    
    
    `;




    return ( 

        <div css={style}>
<label for="colorpicker">Color Picker:</label>
   <input type="color" id="colorpicker" value="#0000ff"></input>
   <div>Den er  <b>{picker ? 'ikke falsk' : 'falsk'}</b> , tøser!</div>
        </div>
     );
}
 
export default Colorpicker;