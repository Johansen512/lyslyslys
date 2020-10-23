/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Controlheader from "../Components/Controlheader"

const Roomview = () => {
    const wrapperstyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color:#0A4DA2;
    color:#FFFFFF;
    font-size: 0.9375rem;
    font-weight: bold;
    
    font-family: 'Montserrat', sans-serif;
    border-style:none;
    
    
`;


    return ( 
        <main css={wrapperstyle}>
        
        <Controlheader title={"Controlpanel"} />
        <AllRooms />
        </main>
        
     );
}
 
export default Roomview;