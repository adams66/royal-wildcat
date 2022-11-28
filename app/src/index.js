import key from "./key/key.json";
import ReactDOM from 'react-dom/client';
import "./css/index.css";
import "./css/override.css";
import React from 'react';
import Home from './pages/Home/Home';
import Draft from './pages/Draft/Draft';
import DraftSeason from "./pages/DraftSeason/DraftSeason";
import HallOfFame from './pages/HallOfFame/HallOfFame';
import {HashRouter, Routes, Route} from "react-router-dom";







const root = ReactDOM.createRoot(document.getElementById('root'));
var theme = localStorage.getItem("theme");

console.log(theme);

root.render(



  <React.StrictMode>

  <HashRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/draft" element={<Draft />}/>
<Route path="/hall-of-fame" element={<HallOfFame />}/> 




{
  key.draft.map((r) => {
    return <Route path={"/draft" + "/" + r.year }  element={<DraftSeason />}/>
  })
}


</Routes>
  </HashRouter>






  </React.StrictMode>
);



  document.body.style.backgroundColor = key.background;







