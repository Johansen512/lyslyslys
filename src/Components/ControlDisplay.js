/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import ColorBall from "./Colorball";
import SceneButton from "./SceneButton";
import IntensityDisplay from "./IntensityDisplay";
import dataContext from "../contexts/DataContext";


const ControlDisplay = () => {

      //Animation test
const move = keyframes`
from {
transform: translate3d(-100px, 0, 0);
}

30%{
transform: translate3d(5px, 0, 0);
}

70% {
transform: translate3d(10px, 0, 0);
}

to {
transform: translate3d(15px, 0, 0);
}`;



    const style = css`
    width:23.4375;
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
    justify-content: center;
    align-items: center;
    
    
    
    


`;

 


const ballsection = css`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
    border-style:none;
   
    
    
    


`;

const balldynamics = css`

animation: ${move} 1s linear ;

`;




    return (  

<main css={style}>
<p>Intensity</p>
    <section css={sectionstyle}>
    
    <IntensityDisplay />
    </section>


    <p>Colors</p>
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
    <ColorBall  ballcolor={"#FFFFFF"} label={"+"}/></div>
    
    </section>

    <p>Scenes</p>
    <section css={sectionstyle}>
    
    <SceneButton color={"#FF9B9B"} scene = {"Birthday"} />
    <SceneButton color={"#A693EB"} scene = {"Party"} />
    <SceneButton color={"#93CAEB"} scene = {"Relax"} />
    <SceneButton color={"#89DD94"} scene = {"Fun"} />
    </section>
</main>

);
}
 
export default ControlDisplay;