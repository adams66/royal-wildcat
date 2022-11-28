import Key from '../../key/key.json';
import "../Draft/draft.css";
import Button  from '../../layout/components/Button/Button';
import React, { useEffect} from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Foundation from '../../layout/Foundation';




const Draft = () => {
	const [theme, setTheme] = useState([]);

	useEffect(() => {
      var getTheme = localStorage.getItem("theme");
      setTheme(getTheme);


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
							   <img style={{height: "200px"}} className="card-img-top mb-3" src={r.card} alt="null" />
							   <h5 className="card-title text-light">{r.year}</h5>
								<p className="card-text text-light">
								  Come view the draft details from {r.year} season.
								</p>
								 <Button content={"View Draft"} href={"/draft/" + r.year}  buttonTheme={theme} app={"true"}></Button>
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
