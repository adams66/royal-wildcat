import Key from '../../key/key.json';
import "../Draft/draft.css";
import Button  from '../../layout/components/Button/Button';
import React, { useEffect} from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Foundation from '../../layout/Foundation';
import Engine from '../../layout/engine/Engine';




const Draft = () => {
	const [theme, setTheme] = useState([]);

	useEffect(() => {

      setTheme(Engine());

	  },[])


	return (

<Foundation>
		<div className="container-fluid mt-3">
		<div className="row">
			{Key.draft.map((r) => {
				return (
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<div className="card" style={{backgroundColor: Key.component}}>
							<div className="card-body p-2">
								
							   <img className="card-img-top mb-3" src="wildcat.gif" />
							   <h5 className="card-title text-light">{r}</h5>
								<p className="card-text text-light">
								  Come view the draft details from {r} season.
								</p>

								 <Button className={"btn card-link text-light text-decoration-none " + theme } href={"/draft/" + r} app={"true"} content={"View Draft"} />

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
