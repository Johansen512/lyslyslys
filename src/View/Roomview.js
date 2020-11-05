/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ControlDisplay from "../Components/ControlDisplay";
import Roomheader from "../Components/Roomheader";
import {useContext} from "react";
import { dataContext } from "../contexts/DataContext"
import Footer from "../Components/Footer"


const Roomview = (props) => {
    
        const { data } = useContext(dataContext);
        data && console.log("from context:", data[0].id);

        let hest = data && data.find(function (element) { 
            
    
            return element.id === parseInt(props.id); 
            
        }); 
        console.log (hest); 
        
        console.log (props);

    const wrapperstyle = css`
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0;
    background-color:#0A4DA2;
    color:#FFFFFF;
    font-size: 0.9375rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    border-style:none;
    position: relative;
    
    
    
`;





    return hest && ( 
        <main css={wrapperstyle}>
        <Roomheader label={hest.name} no={hest.numberoflights} />
       <ControlDisplay />
       <Footer />
        </main>
        
     );
}
 
export default Roomview;