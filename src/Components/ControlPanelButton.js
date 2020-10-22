/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ControlPanelButton = ({label, pictogram, no, props }) => {

    const style = css`
    width: 9.375em;
    height: 9.375em;
    border: 10px solid black;
    background-color:#FFFFFF;
    color:#002D67;
    font-size: 1.1875em;
    font-weight: bold;
    border-radius: 1em;
    border-style:none;
    font-family: 'Montserrat', sans-serif;
    
`;


    return ( 


        <button css={style}
        type="button"><img src={"/img/" + {pictogram} + ".png"} /><h3>{label}</h3><p>{no}</p></button>


     );
}
 
export default ControlPanelButton;