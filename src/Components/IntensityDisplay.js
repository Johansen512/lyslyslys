/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const IntensityDisplay = ({props}) => {

  const style= css`
  display: flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items: center;
  margin: 0 4rem;
  
  
  
  `;



const sliderstyle = css({
  
appearance: 'none',
backgroundColor: '#CECECE',
height: '0.1rem',
padding: '0 4rem',
});

/*const sliderstyleFocus = css({
  
  
  '&Focus': '#ff0000',
  
  });*/



const imgstyle = css`



padding: 0 0.5rem;



`;

/*const sliderstyleFocus=css`

({&Focus:#FFD339})

`;*/








    return ( 
        
    <div css={style}><img css={imgstyle} src="../img/bulbOff.png" alt="Off"/><input css={sliderstyle}type="range" min="1" max="200" value="200"/><img css={imgstyle} src="../img/bulbOn.png" alt=""/></div>
        
    );
}
 
export default IntensityDisplay;