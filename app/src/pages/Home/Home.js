import { Key } from "../../key/key.json";
import "../Home/home.css";
import Foundation from "../../layout/Foundation";
import HomeHeader from "./homeComponents/HomeHeader";
import HomeGrid from "./homeComponents/HomeGrid";
import {useEffect, useState} from "react";


function Home() {



  useEffect(() => {


    },[])

  return (
<Foundation>
<HomeHeader />
<HomeGrid   />
</Foundation>

  );
}

export default Home;
