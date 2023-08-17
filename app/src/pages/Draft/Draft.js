import * as helper from '../../helpers/helpers';
import Key from '../../key/key.json';
import '../Draft/draft.css';
import Button from '../../layout/components/Button/Button';
import Foundation from '../../layout/Foundation';
import { useEffect } from 'react';

function Draft() {


	useEffect(()=>{
		document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#000000');


	},[])


	return (
		<Foundation>
			        <div style={{height: "500px", overflow:"hidden"}} className="row m-3 m-md-5 p-0 rounded">
            <div style={{height: "100%",position: "relative" }}  className="col p-0 m-0  rounded">
                <div className="videoOverlay"></div>
                <video className="video" style={{width: "100%"}} autoPlay muted loop playsInline src="./video.mp4" />
				<h1 className='text-white' style={{position: "absolute", left:"50%", top: "50%", transform: "translate(-50%)"}}>Draft History</h1>
            </div>
        </div>


				<div style={{height: "100%"}} className="row m-0 m-md-4 m-lg-3 draft-container">
					{Key.draft.map((r) => {
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
