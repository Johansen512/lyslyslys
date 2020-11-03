/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Roomlightbutton from "../Components/Roomlightbutton"

const RoomlightbuttonCluster = ({label, props}) => {

    const style = css`
    display: flex;
    flex-direction: row;
    
    
    
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