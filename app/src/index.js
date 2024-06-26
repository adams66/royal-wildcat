import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as helper from './helpers/helpers';
import Key from "./key/key.json";
import "./css/bootstrap.css";
import "./css/override.css";
import "./css/theme.css";

import Home from './pages/Home/Home';
import Draft from './pages/Draft/Draft';
import Theme from "./pages/Theme/Theme";
import DraftSeason from "./pages/DraftSeason/DraftSeason";
import DraftSeasonAll from './pages/DraftSeason/DraftSeasonAll';
import HallOfFame from './pages/HallOfFame/HallOfFame';
import Trophy from './pages/Trophy/Trophy';
import NflTeams from './pages/NflTeams/NflTeams';
import Map from './pages/Map/Map';
import NflTeamsSingle from './pages/NflTeamsSingle/NflTeamsSingle';
import NotFound from "./pages/NotFound/NotFound";
import Stats from './pages/Stats/Stats';




helper.themeInit();
const root = ReactDOM.createRoot(document.getElementById('root'));
var splash = true;
var theme = localStorage.getItem("theme");


if(theme !== "undecided"){

  root.render(
    <React.StrictMode>
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/draft" element={<Draft />}/>
  <Route path="/hall-of-fame" element={<HallOfFame />}/> 
  <Route path='/trophy' element={<Trophy />} />
  <Route path="/Stats" element={<Stats />} /> 
  <Route path="/nflTeams" element={<NflTeams />}/> 
  <Route path="/map" element={<Map />}/> 
  {Key.draft.map((r) => {return <Route path={"/draft" + "/" + r.year }  element={<DraftSeason  />}/>})}
  {Key.draft.map((r) => {return <Route path={"/draft/all" + "/" + r.year }  element={<DraftSeasonAll  />}/>})}
  {Key.nflTeams.map((r) => {return <Route path={"/nflTeams" + "/" + r.teamUrl }  element={<NflTeamsSingle />}/>})}
  <Route path="/*" element={<NotFound />}/> 
  </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}


else{root.render(<Theme />);}



