/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ControlPanelButton from "./ControlPanelButton"
import dataContext from "../Contexts/DataContext"



const AllRooms = () => {

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
    <p>All Rooms</p>

    <section css={sectionstyle}>
    <ControlPanelButton pictogram={"bed"} label={"Bed room"} no={"4"} link to />
    <ControlPanelButton pictogram={"room"} label={"Living room"} no={"2"}/>
    <ControlPanelButton pictogram={"kitchen"} label={"Kitchen"} no={"5"}/>
    <ControlPanelButton pictogram={"bathtube"} label={"Bathroom"} no={"1"}/>
    <ControlPanelButton pictogram={"house"} label={"Outdoor"} no={"5"}/>
    <ControlPanelButton pictogram={"balcony"} label={"Balcony"} no={"2"}/>
    
    </section>
</main>

);
}
 
export default AllRooms;