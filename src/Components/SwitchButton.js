/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import './switchButton.css';
/*import MyContext from "../contexts/MainContext";
import {types} from "../contexts/MainContext";*/




/*const SwitchButton = ({text, style }) => {*/



const SwitchButton = ({ primeStyle, label, ...props }) => {
const mode = primeStyle ? 'primeStyle--big' : 'primeStyle--scene';


/*const primeStyle = css`
width: 9.375em;
color: #393939;
font-size: 1.1875em;
border-radius: 1.25em;
font-family: Montserrat;


& .styleScene {
    height: 3.4375em;
    background-color: pink; }

& .styleBig 
    width: 9.375em;
    height: 9.375em;
    background-color: white;
    color: #393939;
    font-size: 1.1875em;
    border-radius: 1.25em;


    
    `*/
    console.log (primeStyle)
    return (

       

        <button 
     
        type="button"
        className={[primeStyle, mode].join(' ')}
        {...props}>
        {label}
        </button>
       

      );
}


 
export default SwitchButton;