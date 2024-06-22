import { useEffect } from 'react';

function NotFound() {
	function messageAction() {
		document.querySelector('.fixthat').style.opacity = 1;

		setTimeout(() => {
			window.location.replace('/');
		}, 2000);
	}

	useEffect(() => {
		document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#000000');
		setTimeout(messageAction, 3000);
	}, []);

	return (
		<div style={{ height: '100vh' }} className="container-fluid">
			<div style={{ height: '100%' }} className="row d-flex justify-content-center align-items-center">
				<div className="col">
					<h1 className="text-center text-light m-0">This place doesn't exist.</h1>
					<h3 style={{ opacity: '0', transition: '0.3s ease-in-out' }} className="fixthat text-center text-light m-0">I can fix that...</h3>
				</div>
			</div>
		</div>
	);
}
export default NotFound;
