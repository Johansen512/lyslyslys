/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import ColorBall from "./Colorball";
import SceneButton from "./SceneButton";
import IntensityDisplay from "./IntensityDisplay";


//viser lysskifteslider, farveskift knapper og moodknapper går til Roomview
const ControlDisplay = () => {

    /*const {picker} = useContext(dataContext)
console.log ("aj aj" + (picker))*/

      //Animation test
const move = keyframes`
from {
transform: translate(-500px, 0);
}





to {
transform: translate(5px, 0);
}`;



    const style = css`
    width:100vw;
    display: flex;
    flex-direction: column;
    background-color:#F6F8FB; 
    color:#002D67;
    font-size: 1.1875em;
    font-weight: bold;
    border-radius: 2em;
    font-family: 'Montserrat', sans-serif;
    padding-bottom:100px;
    
    

`;

const sectionstyle = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px;
    
    
    
    
    
    


`;

 


const ballsection = css`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
    border-style:none;
    position: relative;
   
    
    
    


`;

const balldynamics = css`

animation: ${move} 1s linear;
justify-self: center;

`;

const headlines = css`

display:flex;
margin: 2rem;

`;




    return (  

<main css={style}>
<p css={headlines}>Intensity</p>
    <section css={sectionstyle}>
    
    <IntensityDisplay />
    </section>


    <p css={headlines}>Colors</p>
    <section css={ballsection}>
    <div css={balldynamics}>
    <ColorBall  ballcolor={"#FF9B9B"}/></div>
    <div css={balldynamics}>
    <ColorBall  ballcolor={"#94EB9E"}/></div>
    <div css={balldynamics}>
    <ColorBall  ballcolor={"#94CAEB"}/></div>
    <div css={balldynamics}>
    <ColorBall ballcolor={"#A594EB"}/></div>
    <div css={balldynamics}>
    <ColorBall  ballcolor={"#DE94EB"}/></div>
    <div css={balldynamics}>
    <ColorBall  ballcolor={"#EBD094"}/></div>
    <div css={balldynamics}>
    <ColorBall /*onClick={() => picker(false)}*/ ballcolor={"#FFFFFF"} label={"+"}/></div>
    
    </section>

    <p css={headlines}>Scenes</p>
    <section css={sectionstyle}>
    <div css={balldynamics}><SceneButton  color={"#FF9B9B"} scene = {"Birthday"} /></div>
    <div css={balldynamics}><SceneButton color={"#A693EB"} scene = {"Party"} /></div>
    <div css={balldynamics}><SceneButton  color={"#93CAEB"} scene = {"Relax"} /></div>
    <div css={balldynamics}><SceneButton  color={"#89DD94"} scene = {"Fun"} /></div>
    </section>
</main>

);
}
 
export default ControlDisplay;