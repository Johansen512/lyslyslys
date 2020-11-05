/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";


const FetchTest = (props) => {

   
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch (`https://dethimmelskelys.netlify.app/data/stuff.json`)
        .then (response => response.json())
        .then (result => setData(result)
            )
    }, [props.type]);

    data && console.log(data.stuff[0])
    

    return ( 


<div>
    {data && data.stuff.map (teststuff => (
        <div key={teststuff.id}>
           
            <p>name={teststuff.name}</p>
            <p>lights={teststuff.numberoflights}</p>
           
           
            
            
        </div>
    ))
    }
hej
</div>
     )}


export default FetchTest;