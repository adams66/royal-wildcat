import Key from '../../key/key.json';
import "../Draft/draft.css"
import React, { useEffect} from "react";
import { Link } from 'react-router-dom';
import Foundation from '../../layout/Foundation';



const Draft = () => {
	useEffect(() => {


	  },[])


	return (

<Foundation>
		<div className="container-fluid mt-3">
		<div className="row">
			{Key.draft.map((r) => {
				return (
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<div className="card" style={{backgroundColor: Key.component}}>
							<div className="card-body">
								<h5 className="card-title text-light">{r}</h5>
							
								<p className="card-text text-light">
								  Come view the draft details from {r} season.
								</p>

								<Link style={{backgroundColor: Key.buttons}} className="btn  card-link text-light text-decoration-none" to={"/draft/" + r}>View Draft</Link>

							</div>
						</div>
					</div>
				);
			})}
		</div>
	</div>
	</Foundation>

	);

};

export default Draft;
