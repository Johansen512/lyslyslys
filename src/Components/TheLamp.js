/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useContext } from "react";
import { dataContext } from "../contexts/DataContext"

//Lampe SVG plus det løse går til Roomheader

const TheLamp = () => {

  const {lampcolor}=useContext(dataContext)
  console.log ("hey det er jo " + (lampcolor))

  const {opac}=useContext(dataContext)
  console.log ("Opac? Hva fanden er Opac?!" + (opac))
 
  

//HER LOCAL STORAGE TING! ... MÅSKE


  



    return ( <svg width="139" height="192" viewBox="0 0 139 192">
  <defs>
    <filter id="OFF" x="35" y="122" width="70" height="70" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feFlood floodColor={lampcolor}/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter opacity={opac}  id="Ellipse_10" x="35" y="122" width="70" height="70" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="8" result="blur-2"/>
      <feFlood floodColor={lampcolor}/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="light_bulb" data-name="light bulb" transform="translate(-204 4)">
    <g transform="matrix(1, 0, 0, 1, 204, -4)" filter="url(#OFF)">
      <circle id="OFF-2" data-name="OFF" cx="11" cy="11" r="13" transform="translate(59 143)" fill={lampcolor}/>
</g> 
    <g transform="matrix(1, 0, 0, 1, 204, -1)" filter="url(#Ellipse_10)">{/*Pæren er lige der ... nedenfor fill*/}
      <circle opacity={opac} id="Ellipse_10-2" data-name="Ellipse 10" cx="11" cy="11" r="15" transform="translate(59 143)" fill={lampcolor}/>
    </g>
    <path id="Path_100" data-name="Path 100" d="M30.334,1.617h79.054c3.314,0,4.206,2.324,6,6L139,62a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6L24.334,7.617C25.837,4.237,27.02,1.617,30.334,1.617Z" transform="translate(204 85)" fill="#fff"/>
    <rect id="Rectangle_13" data-name="Rectangle 13" width="5" height="102" transform="translate(271 -4)" fill="#fff"/>
    <rect id="Rectangle_14" data-name="Rectangle 14" width="4" height="58" rx="2" transform="matrix(0.921, -0.391, 0.391, 0.921, 303.828, 92.087)" fill="#568bd0" opacity="0.151"/>
  </g>
</svg>
 );
}
 
export default TheLamp;