/** @jsx jsx */
import { css, jsx } from "@emotion/core";



const Footer = () => {

const footerstyle = css`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: white;
height:4.1875rem;
width: 23.4375rem;
color:black;
bottom: 0;
position:absolute;



`;

    return ( 
    
    <footer css={footerstyle}>
        <img src="http://localhost:3000/img/bluebulb.png" alt="light"/><img src="http://localhost:3000/img/bluecog.png" alt="manage"/><img src="http://localhost:3000/img/bluehouse.png" alt="home"/>
        
    </footer>

        
     );
}
 
export default Footer;