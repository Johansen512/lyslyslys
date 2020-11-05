/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//Toppen på forsiden ... "forsiden"

const Controlheader = ({title}) => {

    const imgstyle = css`
    
    width:3.3125rem;
    height:3.3125rem;
    border-radius:3.125rem;
    border: solid white 0.125rem;
    
`;

const headerstyle = css`
    
display: flex;
margin: 1rem;
flex-direction: row;
justify-content:space-between;
align-items: center;

`;


    return (

<header css={headerstyle}><h1>{title}</h1><img css={imgstyle} src="https://dethimmelskelys.netlify.app/img/user.jpg" alt="looser"/></header>


      );
}
 
export default Controlheader;