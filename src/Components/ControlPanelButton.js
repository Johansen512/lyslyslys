/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ControlPanelButton = ({label, pictogram, no, props }) => {

    const style = css`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.75rem;
    width: 9.375rem;
    height: 9.375rem;
    background-color:#FFFFFF;
    color:#002D67;
    font-size: 1.1875rem;
    font-weight: bold;
    border-radius: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    
`;


    return ( 

        
        <button css={style}
        type="button"><img src={`/img/${pictogram}.png`} /><h3>{label}</h3><p>{no}</p></button>


     );

     
}
 
export default ControlPanelButton;