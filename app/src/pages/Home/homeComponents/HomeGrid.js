import Key from '../../../key/key.json';
import "../../../helpers/theme";
import { useEffect } from 'react';
import theme from '../../../helpers/theme';

function HomeGrid() {
	useEffect(() => {
    

	},[])

	var btn = theme() + " btn text-light";


	return (

	


		<div className="row m-3 m-md-4 m-lg-5">
            <div className="col-12">
            <h3 className="text-light">Quick Links</h3>

            </div>
			<div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
				<div style={{backgroundColor: Key.component}} className="card p-0 rounded m-2">
					<img src="football.jpg" className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title text-light">Card title</h5>
						<p className="card-text text-light">
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
						<a style={{backgroundColor: Key.buttons}} href="#" className="btn text-light">
							Go somewhere
						</a>
					</div>
				</div>
			</div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
				<div style={{backgroundColor: Key.component}} className="card p-0 rounded m-2 ">
					<img src="football.jpg" className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title text-light">Card title</h5>
						<p className="card-text text-light">
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
						<a  href="#" className={btn}>
							Go somewhere
						</a>
					</div>
				</div>
			</div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
				<div style={{backgroundColor: Key.component}} className="card p-0 rounded m-2">
					<img src="football.jpg" className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title text-light">Card title</h5>
						<p className="card-text text-light">
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
						<a style={{backgroundColor: Key.buttons}} href="#" className="btn text-light ">
							Go somewhere
						</a>
					</div>
				</div>   
			</div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
				<div style={{backgroundColor: Key.component}} className="card p-0 rounded m-2">
					<img src="football.jpg" className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title text-light">Card title</h5>
						<p className="card-text text-light">
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
						<a style={{backgroundColor: Key.buttons}} href="#" className="btn text-light ">
							Go somewhere
						</a>
					</div>
				</div>   
			</div>
		</div>
	);
}

export default HomeGrid;
