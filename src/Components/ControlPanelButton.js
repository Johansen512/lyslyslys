/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ControlPanelButton = ({label, pictogram, no, props }) => {





    return ( 


        <button 
        type="button"
        /*className={}*/
        img={pictogram}
        text={no}
        {...props}
        
        >{label}</button>

     );
}
 
export default ControlPanelButton;