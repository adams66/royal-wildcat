import * as helper from '../../helpers/helpers';
import Key from '../../key/key.json';
import '../Draft/draft.css';
import Button from '../../layout/components/Button/Button';
import Foundation from '../../layout/Foundation';
import React, { useEffect, useState } from 'react';

function Draft() {

	const [ season, setSeason ] = useState([]);
	const [ Load,  SetLoad  ] = useState(false);



	const fetchData = () => {
		return fetch('https://homebase.dal-10.com/public/season')
			.then((response) => response.json())
			.then((data) => {
				SetLoad(true);
				setSeason(data);
			});
	};




	useEffect(()=>{
		document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#000000');
		var season = fetchData();

	},[])


	return (
		<Foundation>
				<div style={{height: "100%"}} className="row m-3 m-md-4 draft-container">
					{season.map((r) => {
						return (
							<div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
								<div className="card p-2 round m-3 m-md-2" style={{ backgroundColor: '#101116' }}>
									<div className="card-body">
	
										<h5 className="card-title text-light font-bold">Season {r.year}</h5>
										<p  className="card-text text-light">
											View the draft details from {r.year} season.
										</p>
										<Button
											color="rgb(102, 16, 242)"
											content={'View Draft'}
											href={'/draft/' + r.year}

											
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
		</Foundation>
	);
};

export default Draft;
