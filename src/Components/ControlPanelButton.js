/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "@reach/router";

//Den enkelte rumknap ... går til AllRoom

const ControlPanelButton = ({label, id, pictogram, no, props }) => {

    const style = css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 0.75rem;
    width: 9.375rem;
    height: 9.375rem;
    background-color:#FFFFFF;
    color:#002D67;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    border-style:none;
    outline:none;
    
    
    
`;
const pstyle = css`
font-size: 0.825rem;
color:#FFA939;
padding: 0 0 0.5rem 0.3rem;
margin: 0;

`;

const hstyle = css`
font-size: 1rem;
color:#002D67;
padding: 1rem 0 0.1rem 0.3rem;
margin: 0;
`;

const imgstyle = css`
padding: 2 0 0.05rem 0.3rem;
`;

    return ( 

        <Link to={"/roomview/"+ id}>
        <button css={style}
        type="button"><img css={imgstyle} src={`img/${pictogram}.png`} alt="" /><h3 css={hstyle}>{label}</h3><p css={pstyle}>{`${no} lights`}</p></button></Link>


     );

     
}
 
export default ControlPanelButton;