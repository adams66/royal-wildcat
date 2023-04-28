import ReactDOM from 'react-dom/client';
import React from 'react';
import Key from "./key/key.json";
import "./css/index.css";
import "./css/override.css";
import Home from './pages/Home/Home';
import Draft from './pages/Draft/Draft';
import Theme from "./pages/Theme/Theme";
import DraftSeason from "./pages/DraftSeason/DraftSeason";
import HallOfFame from './pages/HallOfFame/HallOfFame';
import NflTeams from './pages/NflTeams/NflTeams';
import Map from './pages/Map/Map';
import NflTeamsSingle from './pages/NflTeamsSingle/NflTeamsSingle';
import NotFound from "./pages/NotFound/NotFound";
import {HashRouter, Routes, Route} from "react-router-dom";
import Stats from './pages/Stats/Stats';

var getTheme = localStorage.getItem("theme");
console.log(getTheme);
if(getTheme == null){

  localStorage.setItem("theme", "undecided");
  localStorage.setItem("theme-color", "undecided");

}

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
  <Route path="/Stats" element={<Stats />} /> 
  <Route path="/nflTeams" element={<NflTeams />}/> 
  <Route path="/map" element={<Map />}/> 
  <Route path="/*" element={<NotFound />}/> 
  {Key.draft.map((r) => {return <Route path={"/draft" + "/" + r.year }  element={<DraftSeason />}/>})}
  {Key.nflTeams.map((r) => {return <Route path={"/nflTeams" + "/" + r.teamUrl }  element={<NflTeamsSingle />}/>})}
  </Routes>
    </HashRouter>
    </React.StrictMode>
  );
}
else{root.render(<Theme />);}
