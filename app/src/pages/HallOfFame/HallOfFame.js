import Key from "../../key/key.json";
import Foundation from "../../layout/Foundation";




function HallOfFame(){
return(

    <Foundation>
    <div className="row m-3 m-md-4 m-lg-5">


        {Key.champions.map((champions) =>{
            return(
                       <div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
                       <div style={{backgroundColor: Key.component}} className="card p-0 rounded m-2">
                           <img src="football.jpg" className="card-img-top" alt="" />
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