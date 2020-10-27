/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import dataContext from "../Contexts/DataContext";


const Controlheader = ({title}) => {

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
border:none;
`;


    return (

<header css={headerstyle}><h1>{title}</h1><img css={imgstyle} src="img/user0.jpg"/></header>


      );
}
 
export default Controlheader;