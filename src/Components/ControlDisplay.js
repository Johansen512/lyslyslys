/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SceneButton from "./SceneButton"



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

    return (  

<main css={style}>
    
    <section css={sectionstyle}>
    <p>Intensity</p>
    </section>

    <section css={sectionstyle}>
    <p>Colors</p>
    </section>

    <section css={sectionstyle}>
    <p>Scenes</p>
    <SceneButton color={"#FF9B9B"} scene = {"Birthday"} />
    <SceneButton color={"#A693EB"} scene = {"Party"} />
    <SceneButton color={"#93CAEB"} scene = {"Relax"} />
    <SceneButton color={"#89DD94"} scene = {"Fun"} />
    </section>
</main>

);
}
 
export default ControlDisplay;