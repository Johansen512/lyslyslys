/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ColorBall = ({ballcolor, label}) => {

    const ballstyle = css`

    width:1.875rem;
    height:1.875rem;
    background-color:${ballcolor};
    border-radius: 0.875rem;
    border-style:none;
    
    
    `;
    return ( 
        
        <button css={ballstyle}>{label}</button>
    );
}
 
export default ColorBall;