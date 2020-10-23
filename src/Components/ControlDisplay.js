/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ColorBall from "./Colorball";
import SceneButton from "./SceneButton"
import IntensityDisplay from "./IntensityDisplay"



const ControlDisplay = () => {

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
    justify-content: space-evenly;
    align-items: center;
    
    
    


`;

    return (  

<main css={style}>
<p>Intensity</p>
    <section css={sectionstyle}>
    
    <IntensityDisplay />
    </section>


    <p>Colors</p>
    <section css={ballsection}>
    
    <ColorBall ballcolor={"#FF9B9B"}/>
    <ColorBall ballcolor={"#94EB9E"}/>
    <ColorBall ballcolor={"#94CAEB"}/>
    <ColorBall ballcolor={"#A594EB"}/>
    <ColorBall ballcolor={"#DE94EB"}/>
    <ColorBall ballcolor={"#EBD094"}/>
    <ColorBall ballcolor={"#FFFFFF"} label={"+"}/>
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