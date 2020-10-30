/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import RoomlightbuttonCluster from "../Components/RoomlightbuttonCluster"
import dataContext from "../contexts/DataContext"
import { Link } from "@reach/router"
import TheLamp from "../Components/TheLamp"

const Roomheader = ({label, no}) => {

    const imgstyle = css`
    grid-column: 1/2;
    grid-row:1/2;
    width:0.87875rem;
    height:0.82875rem;
   
    
    
`;
const lampstyle = css`
grid-column: 6/8;
grid-row:1/2;
width:8.6875rem;
height:10.3125rem;
padding: 0 0.5 0 0;



`;

const headerstyle = css`
    
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    
`;

const hstyle = css`
grid-column: 2/3;
grid-row:1/2;


`;

const pstyle = css`
display:flex;
flex-direction:column;
color: #FFD239;
font-size: 1.1875rem;
font-family: 'Montserrat', sans-serif;
grid-column: 1/3;
grid-row:2/3;

`;

const clusterstyle= css`
grid-column: 1/10;
grid-row:3/4;


`;


    return (


<header css={headerstyle}><h1 css={hstyle}><Link to="/"><img css={imgstyle} src="../img/backarrow.png"/></Link>{label}</h1><p css={pstyle}>{no} lights</p><div css={lampstyle}><TheLamp /></div><div css={clusterstyle}><RoomlightbuttonCluster /></div></header>

      );
}
 
export default Roomheader;