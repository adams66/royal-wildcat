import { Key } from "../../key/key.json";
import "../Home/home.css";
import Foundation from "../../layout/Foundation";
import HomeHeader from "./homeComponents/HomeHeader";
import HomeGrid from "./homeComponents/HomeGrid";
import Button from "../../layout/components/Button/Button";
import {useEffect} from "react";
import { useState } from "react";





function Home() {
const [royal, SetRoyal] = useState(1);




    

  return (
    <Foundation>
    <HomeHeader />
    <HomeGrid  theme={royal}    />
    </Foundation>
    
      );




}

export default Home;
