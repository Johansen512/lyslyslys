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
    <ControlPanelButton pictogram={img src="../public/img/brd.png" } label={"Bed room"} no={"4"}/>
    <ControlPanelButton label={"Living room"} no={"2"}/>
    <ControlPanelButton label={"Kitchen"} no={"5"}/>
    <ControlPanelButton label={"Bathroom"} no={"1"}/>
    <ControlPanelButton label={"Outdoor"} no={"5"}/>
    <ControlPanelButton label={"Balcony"} no={"2"}/>
    </section>
</main>

);
}
 
export default AllRooms;