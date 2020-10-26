/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Roomlightbutton from "../Components/Roomlightbutton"

const RoomlightbuttonCluster = ({label, props}) => {

    const style = css`
    display: flex;
    flex-direction: row;
    
    
    
`;



    return ( 
<div>
        <Roomlightbutton label={"Main lights"}/>
        <Roomlightbutton label={"Desk lights"}/>
        <Roomlightbutton label={"Bed lights"}/>
        </div>
     );
}
 
export default RoomlightbuttonCluster;