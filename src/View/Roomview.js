/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ControlDisplay from "../Components/ControlDisplay";
import Roomheader from "../Components/Roomheader";
import {useContext} from "react";
import { dataContext } from "../contexts/DataContext"

const Roomview = (props) => {
    
        const { data } = useContext(dataContext);
        data && console.log("from context:", data[0].id);

        var hest = data.find(function (element) { 
            
    
            return element.id === parseInt(props.id); 
            
        }); 
        console.log (hest);
        
        console.log (props);

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
        <Roomheader label={hest.name} no={hest.numberoflights} />
       <ControlDisplay />
        </main>
        
     );
}
 
export default Roomview;