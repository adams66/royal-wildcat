import * as helper from '../../helpers/helpers';
import Key from '../../key/key.json';
import "../Draft/draft.css";
import Button  from '../../layout/components/Button/Button';
import React, { useEffect} from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Foundation from '../../layout/Foundation';




const Draft = () => {
	useEffect(() => {
	  window.scrollTo(0,0);	
	  },[])


	return (

<Foundation>
		<div className="container-fluid mt-3 draft-container">
		<div className="row">
			{Key.draft.map((r) => {
				return (
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<div className="card p-2" style={{backgroundColor: helper.themeColor(Key, 'cards')}}>
							<div className="card-body p-2">
							   {/* <img style={{height: "200px"}} className="card-img-top mb-3" src={r.card} alt="null" /> */}
							   <h5 className="card-title text-light">Season {r.year}</h5>
								<p style={{color: helper.themeColor(Key,'paragraph')}} className="card-text">
								  View the draft details from {r.year} season.
								</p>
								 <Button color={helper.themeColor(Key, 'color')} content={"View Draft"} href={"/draft/" + r.year}></Button>
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
