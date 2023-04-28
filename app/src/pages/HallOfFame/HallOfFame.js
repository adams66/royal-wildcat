import Key from "../../key/key.json";
import  * as helper  from "../../helpers/helpers";
import Foundation from "../../layout/Foundation";
import { useEffect } from "react";




function HallOfFame(){

    useEffect(() => {
		helper.windowReset();	
	}, []);




return(

    <Foundation>
    <div className="row m-3 m-md-4 m-lg-3">


        {Key.champions.map((champions) =>{
            return(
                       <div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
                       <div style={{backgroundColor: "#101116"}} className="card p-0 rounded m-3">
    
                           <div className="card-body">
                               <h5 className="card-title text-light">{champions.name}</h5>
                               <h5 className="card-title text-light">{champions.season}</h5>
                               <p className="card-text text-light">
                                   Some quick example text to build on the card title and make up the bulk of the card's
                                   content.
                               </p>

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