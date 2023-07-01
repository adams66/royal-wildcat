import * as helper from '../../helpers/helpers';
import Key from '../../key/key.json';
import '../Draft/draft.css';
import Button from '../../layout/components/Button/Button';
import Foundation from '../../layout/Foundation';

function Draft() {
	return (
		<Foundation>
						<div style={{border: "2px solid blue",height:"300px", }} className='row m-1 m-md-3 text-light text-center d-flex justify-content-center align-items-center'>
				<div className='col'>
				<h1>Draft Seasons</h1>
				</div>
				</div>



				<div style={{height: "100%"}} className="row m-0 m-md-4 m-lg-3 draft-container">
					{Key.draft.map((r) => {
						return (
							<div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
								<div className="card p-2 round m-3 m-md-2" style={{ backgroundColor: '#101116' }}>
									<div className="card-body">
	
										<h5 className="card-title text-light font-bold">Season {r.year}</h5>
										<p style={{ color: helper.themeColor(Key, 'paragraph') }} className="card-text">
											View the draft details from {r.year} season.
										</p>
										<Button
											color={helper.themeColor(Key, 'color')}
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
