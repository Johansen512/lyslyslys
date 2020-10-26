/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import RoomlightbuttonCluster from "../Components/RoomlightbuttonCluster"


const Roomheader = ({room, no}) => {

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


<header css={headerstyle}><img css={imgstyle} src="img/backarrow.png"/><h1>{room}</h1><img css={imgstyle} src="img/user0.jpg"/><p>'${no} lights'</p><RoomlightbuttonCluster /></header>

      );
}
 
export default Roomheader;