import Key from '../../key/key.json';
import "../Draft/draft.css";

import React, { useEffect} from "react";

import { useState } from 'react';
import Foundation from '../../layout/Foundation';




const CollegeFootball = () => {
	const [theme, setTheme] = useState([]);

	useEffect(() => {
      var getTheme = localStorage.getItem("theme");
      setTheme(getTheme);


	  },[])


	return (

<Foundation>
		<div className="container-fluid mt-3">
		<div className="row">

		</div>
	</div>
	</Foundation>

	);

};

export default CollegeFootball;