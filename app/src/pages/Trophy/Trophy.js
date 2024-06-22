import Foundation from "../../layout/Foundation";
import Icon from "../../icons/Icon";
import React, { useEffect, useState } from 'react';
import TrophySingle from "./TrophySingle";

function Trophy() {

   const [ trophy, setTrophy] = useState(1);

   function uno(){
    setTrophy(1)
    console.log("uno")

   }

   function dos(){
    console.log("dos")
    setTrophy(2)
   }

   useEffect(()=>{
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  'rgb(16, 17, 22)');

   })

    return (  

<Foundation >
<div class="row position-relative vh-100 ">
    <div class="col d-flex justify-content-center align-items-center">
        <TrophySingle trophy={trophy} />
    </div>

    <div>
    <div onClick={()=>{uno()}} style={{"position": "absolute", "left": "30px","top":"50%"}}>
    <Icon color={'red'} icon="bi bi-arrow-left-square" size="40px" />
    </div>
    <div onClick={()=>{dos()}} style={{"position": "absolute", "right": "30px", "top":"50%"}} >
    <Icon  color={'red'} icon="bi bi-arrow-right-square" size="40px" />
    </div>

    </div>

</div>



 

</Foundation>
    );
}

export default Trophy;