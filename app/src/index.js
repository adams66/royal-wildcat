import Key from "./key/key.json";
import  * as helper  from "../src/helpers/helpers.js";
import ReactDOM from 'react-dom/client';
import "./css/index.css";
import "./css/override.css";
import React from 'react';
import Home from './pages/Home/Home';
import Draft from './pages/Draft/Draft';
import Theme from "./pages/Theme/Theme";
import DraftSeason from "./pages/DraftSeason/DraftSeason";
import HallOfFame from './pages/HallOfFame/HallOfFame';
import NflTeams from './pages/NflTeams/NflTeams';
import NotFound from "./pages/NotFound/NotFound";
import {HashRouter, Routes, Route} from "react-router-dom";

var getTheme = localStorage.getItem("theme");
console.log(getTheme);
if(getTheme == null){localStorage.setItem("theme", "undecided");}

const root = ReactDOM.createRoot(document.getElementById('root'));
var theme = localStorage.getItem("theme");
if(theme !== "undecided"){

  root.render(
    <React.StrictMode>
    <HashRouter>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/draft" element={<Draft />}/>
  <Route path="/hall-of-fame" element={<HallOfFame />}/> 
  <Route path="/nflTeams" element={<NflTeams />}/> 
  <Route path="/*" element={<NotFound />}/> 
  {
    Key.draft.map((r) => {
      return <Route path={"/draft" + "/" + r.year }  element={<DraftSeason />}/>
    })
  }
  </Routes>
    </HashRouter>
    </React.StrictMode>
  );

}

else{
  root.render(<Theme />);
}
