/** @jsx jsx */
import { css, jsx } from "@emotion/core";


const SceneButton = ({scene, color, props }) => {

    const style = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0.75rem;
    width: 9.375rem;
    height: 3.4375rem;
    background-color:red;
    color:#002D67;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.875rem;
    font-family: 'Montserrat', sans-serif;
    border-style:none;
    
    
`;
const pstyle = css`
font-size: 0.825rem;
color:white;
padding: 0.5rem 0 0.5rem 0.3rem;
margin: 0;
`;
const imgstyle = css`
    
width:1.3125rem;
height:1.3125rem;

`;




    return ( 

        <span css={style}> <img css={imgstyle} src={"./img/bulb.png"} /><p css={pstyle}>{scene}</p></span>
      


     );

     
}
 
export default SceneButton;