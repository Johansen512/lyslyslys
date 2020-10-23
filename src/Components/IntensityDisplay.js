/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const IntensityDisplay = ({props}) => {

  const slideStyle= css`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  width: 100%;
  border: solid black 2px;
  margin: 0 2rem;
  padding: 0 2rem;
  
  `;
    return ( 
        
        <div css={slideStyle}><img src="../img/bulbOff.png" alt="Off"/><input css={slideStyle}type="range" min="1" max="200" value="200"/><img src="../img/bulbOn.png" alt=""/></div>
        
    );
}
 
export default IntensityDisplay;