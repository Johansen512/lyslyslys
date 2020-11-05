/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//Footer nav går til Mainview og Roomview

const Footer = () => {

const footerstyle = css`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: white;
height:4.1875rem;
width: 100vw;
color:black;
bottom: 0;
position:absolute;



`;

    return ( 
    
    <footer css={footerstyle}>
        <img src="https://dethimmelskelys.netlify.app/public/img/bluebulb.png" alt="light"/><img src="https://dethimmelskelys.netlify.app/public/img/bluecog.png" alt="manage"/><img src="https://dethimmelskelys.netlify.app/public/img/bluehouse.png" alt="home"/>
        
    </footer>

        
     );
}
 
export default Footer;