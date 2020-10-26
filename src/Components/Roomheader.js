/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import RoomlightbuttonCluster from "../Components/RoomlightbuttonCluster"


const Roomheader = ({room, no}) => {

    const imgstyle = css`
    
    width:0.87875rem;
    height:0.82875rem;
   
    
    
`;

const headerstyle = css`
    
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
    
`;


    return (


<header css={headerstyle}><img css={imgstyle} src="img/backarrow.png"/><h1>{room}</h1><p>`${no} lights`</p><RoomlightbuttonCluster /></header>

      );
}
 
export default Roomheader;