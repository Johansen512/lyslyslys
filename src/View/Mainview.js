/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AllRooms from "../Components/AllRooms"

const Mainview = ({title}) => {
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

const imgstyle = css`
    
    width:3.3125rem;
    height:3.3125rem;
    border-radius:3.125rem;
    border: solid white 0.125rem;
    
`;

const headerstyle = css`
    
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
    
`;

    return ( 
        <main css={wrapperstyle}>
        <header css={headerstyle}><h1>{title}</h1><img css={imgstyle} src="img/user0.jpg"/></header>
        
        <AllRooms />
        </main>
        
     );
}
 
export default Mainview;