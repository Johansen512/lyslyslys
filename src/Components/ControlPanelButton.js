/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ControlPanelButton = ({label, pictogram, no, props }) => {

    const style = css`
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    margin: 0.75em;
    width: 9.375em;
    height: 9.375em;
    background-color:#FFFFFF;
    color:#002D67;
    font-size: 1.1875em;
    font-weight: bold;
    border-radius: 1.5em;
    border-style:none;
    font-family: 'Montserrat', sans-serif;
    
`;


    return ( 

        
        <button css={style}
        type="button"><img src={`/img/${pictogram}.png`} /><h3>{label}</h3><p>{no}</p></button>


     );

     
}
 
export default ControlPanelButton;