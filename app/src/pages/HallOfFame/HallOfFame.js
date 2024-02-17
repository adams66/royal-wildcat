import Key from "../../key/key.json";
import Foundation from "../../layout/Foundation";
import "./hallOfFame.css"


function HallOfFame(){
return(
  
    <Foundation>
	    <div style={{height:"100px", }} className='row m-1 m-md-3 text-light text-center d-flex justify-content-center align-items-center'>
			<div className='col'>
				<h1>Hall of Fame</h1>
			</div>
		</div>




    <div className="row m-0 m-md-4 m-lg-3 h-100 hof">


        {Key.champions.map((champions) =>{
            return(
                       <div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
                       <div style={{backgroundColor: "#101116"}} className="card p-2 rounded m-3 m-md-2">
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