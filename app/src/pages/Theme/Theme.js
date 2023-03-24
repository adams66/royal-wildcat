import { useState } from "react";
import Key from '../../key/key.json';
import Svg from "./components/Svg";
import Particles from "./components/particles";

import Icon from "../../icons/Icon";




function Theme(){
const countTheme = Object.keys(Key.theme).length;

const [theme, setTheme] = useState(1);

function rotate(rotate,count, direction){

switch(direction){
    case "up":
    var countCheckup = (theme < count) ? setTheme(rotate + 1) : null;   
    console.log(theme);
    break;
    case "down":
        var countCheckdown = (theme > 1) ? setTheme(rotate - 1) : null;
    console.log(theme);    
    break;

           


}





}



return(

<div style={{overflow:"hidden"}} className="container-fluid">
<div style={{left: "0", right: "0"}}   className="row position-fixed ">
            <div className="col p-2">
                <h1 className="text-center text-light">Select a Theme</h1>
            </div>
        </div>



		<div style={{height:"100vh"}} className="row">
			<Svg rotate={theme}  />

		</div>
		

<div  onClick={() => {rotate(theme,countTheme, "up")}}  style={{right:"5%", top: "50%", transform:"translateY(-50%)", cursor: "pointer"}}  className="position-fixed">
<Icon color="rgb(102,16,242)" icon="bi bi-chevron-right" size="40px" />

</div>
<div onClick={() => {rotate(theme,countTheme, "down")}} style={{left:"5%", top: "50%", transform:"translateY(-50%)", cursor:"pointer"}} className="position-fixed">
<Icon color="rgb(102,16,242)" icon="bi bi-chevron-left" size="40px"  />
</div>

<Particles />

</div>

);

}


export default Theme;
