/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ControlPanelButton from "./ControlPanelButton"


const AllRooms = () => {

    const style = css`
    border: 10px solid black;
    background-color:#F6F8FB; 
    color:#002D67;
    font-size: 1.1875em;
    font-weight: bold;
    border-radius: 1em;
    border-style:none;
    font-family: 'Montserrat', sans-serif;
    
`;


    return (  

<main css={style}>
    <p>All Rooms</p>
    <section>
    <ControlPanelButton />
    <ControlPanelButton />
    <ControlPanelButton />
    <ControlPanelButton />
    <ControlPanelButton />
    <ControlPanelButton />
    </section>
</main>

);
}
 
export default AllRooms;