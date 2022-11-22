import { Key } from "../../key/key.json";
import "../Home/home.css";
import Foundation from "../../layout/Foundation";
import HomeHeader from "./homeComponents/HomeHeader";
import HomeGrid from "./homeComponents/HomeGrid";
import {useEffect} from "react";
import  "../../helpers/theme"
import theme from "../../helpers/theme";


function Home() {
  useEffect(() => {
var theme = localStorage.getItem("theme");

if(!theme){
  localStorage.setItem("theme", "wildcat");
}
    
    },[])

  return (
<Foundation>
<HomeHeader />
<HomeGrid   />
</Foundation>

  );
}

export default Home;
