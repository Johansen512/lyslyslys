/** @jsx jsx */
import { css, jsx } from "@emotion/core";



const SwitchButton = ({text}) => {

    const style = css`
    width: 9.375em;
    height: 9.375em;
    background-color: white;
    color: #393939;
    font-size: 1.1875em;
    border-radius: 1.25em;
    font-family: Montserrat;
`;




    return (

        <button css={style}>{text}</button>


      );
}
 
export default SwitchButton;