/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Roomlightbutton = ({label, props}) => {

    const style = css`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    margin: 0.75rem;
    width: 7.75rem;
    height: 2.8125rem;
    background-color:#FFFFFF;
    color:#000000;
    font-size: 0.8125rem;
    font-weight: bold;
    border-radius: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    border-style:none;
    
    
`;

const imgstyle = css`
padding: 0 0.5rem;

`;


    return ( 

        <button css={style}><img css={imgstyle} src="../img/bulb.png" alt="Light"/>{label}</button>
     );
}
 
export default Roomlightbutton;