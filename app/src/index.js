import ReactDOM from 'react-dom/client';
import key from "./key/key.json";
import "./css/index.css";
import "./css/override.css";
import React from 'react';
import Home from './pages/Home/Home';
import Draft from './pages/Draft/Draft';
import DraftSeason from "./pages/DraftSeason/DraftSeason"
import {HashRouter, Routes, Route} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/draft" element={<Draft />}/>
{
  key.draft.map((r) => {
    return <Route path={"/draft" + "/" + r  }  element={<DraftSeason />}/>
  })
}


</Routes>
  </HashRouter>
  </React.StrictMode>
);



  document.body.style.backgroundColor = key.background;

  





