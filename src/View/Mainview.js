/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AllRooms from "../Components/AllRooms"
import Controlheader from "../Components/controlheader"

import Footer from "../Components/Footer"


const Mainview = () => {
    const wrapperstyle = css`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
   padding-top:1rem;
    background-color:#0A4DA2;
    color:#FFFFFF;
    font-size: 0.9375rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    border-style:none;
    text-decoration: none;
    position: relative;
    
    
    
`;


    return ( 
        <main css={wrapperstyle}>
        
        <Controlheader title={"Controlpanel"} />
        <AllRooms />
        <Footer />
        </main>
        
     );
}
 
export default Mainview;