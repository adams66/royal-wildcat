import Key from "../../key/key.json";
import Foundation from "../../layout/Foundation";
import React, { useEffect, useState } from 'react';
import "./hallOfFame.css"


function HallOfFame(){

    useEffect(()=>{
        document.querySelector('meta[name="theme-color"]').setAttribute('content',  'rgb(16, 17, 22)');

    })


return(



  
    <Foundation>
    <div className="row m-0 m-md-4 h-100 hof">


        {Key.champions.map((champions) =>{
            return(
                       <div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
                       <div style={{backgroundColor: "#101116"}} className="card p-2 rounded m-3 m-md-2">
                           <div className="card-body d-flex justify-content-between align-items-center">
                                <img width="60px" src="https://content.sportslogos.net/logos/32/719/full/6145_kansas_state_wildcats-mascot-1989.png" />
                               <h5 className="card-title text-light">{champions.name}</h5>
                               <h5 className="card-title text-light">{champions.season}</h5>
                           </div>
                       </div>
                   </div>
            )
        }

        )}
    </div>
</Foundation>
);
}

export default HallOfFame;