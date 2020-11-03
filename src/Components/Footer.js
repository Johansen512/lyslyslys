/** @jsx jsx */
import { css, jsx } from "@emotion/core";



const Footer = () => {

const footerstyle = css`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: white;
height:4.1875rem;
width: 100%;
color:black;



`;

    return ( 
    
    <footer css={footerstyle}>
        <img src="img/bluebulb.png" alt="light"/><img src="img/bluecog.png" alt="manage"/><img src="img/bluehouse.png" alt="home"/>
        
    </footer>

        
     );
}
 
export default Footer;