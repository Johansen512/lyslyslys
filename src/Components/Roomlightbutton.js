/** @jsx jsx */
import { css, jsx } from "@emotion/core";


//Den enkelte Topknap i rum ... mainlight, desklight, bedlight går til RoomlightbuttonCluster
const Roomlightbutton = ({label, picture, props}) => {

    const style = css`
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    margin: 0.46875rem;
    width: 7.75rem;
    height: 2.8125rem;
    background-color:#FFFFFF;
    color:#000000;
    font-size: 0.8125rem;
    font-weight: bold;
    border-radius: 1rem;
    font-family: 'Montserrat', sans-serif;
    border-style:none;
    
    
`;

const imgstyle = css`
padding: 0 0.5rem;

`;


    return ( 

        <button css={style}><img css={imgstyle} src={picture} alt="Light"/>{label}</button>
     );
}
 
export default Roomlightbutton;