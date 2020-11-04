/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import Roomlightbutton from "../Components/Roomlightbutton"

const RoomlightbuttonCluster = ({label, props}) => {


//Animation test
const move = keyframes`
from {
    transform: translate(500px, 0);
}


to {
transform: translate(5px, 0);
}`;



    const style = css`
    display: flex;
    flex-direction: row;
    animation: ${move} 1s linear;
`;




    return ( 
<div css={style}>
        <Roomlightbutton picture={"../img/bulbOn.png"} label={"Main lights"}/>
        <Roomlightbutton picture={"../img/BedBlack.png"} label={"Desk lights"}/>
        <Roomlightbutton picture={"../img/BedBlack.png"} label={"Bed lights"}/>
        </div>
     );
}
 
export default RoomlightbuttonCluster;