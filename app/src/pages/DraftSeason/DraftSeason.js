import React, { useEffect, useState } from "react";
import "./draftSeason.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Circle(props){
  var position = props.position;


  switch(position.Position	){

  case "QB": 
  return <div className="d-flex justify-content-center align-items-center positionCircle qb-color"><div>{position.Position}</div></div>;
  case "RB":
  return <div className="d-flex justify-content-center align-items-center positionCircle rb-color"><div>{position.Position}</div></div>;
  case "WR":
  return <div className="d-flex justify-content-center align-items-center positionCircle wr-color"><div>{position.Position}</div></div>;
  case "K":
  return <div className="d-flex justify-content-center align-items-center positionCircle k-color"><div>{position.Position}</div></div>;  
  case "TE":
  return <div className="d-flex justify-content-center align-items-center positionCircle te-color"><div>{position.Position}</div></div>;
  case "D/ST":
  return <div className="d-flex justify-content-center align-items-center positionCircle d-color"><div>{position.Position	}</div></div>;
  default:
  return <div className="d-flex justify-content-center align-items-center positionCircle other-color"><div>{position.Position	}</div></div>;

  }



}






function Sdraft() { 
  const [draft, setDraft] = useState([]);

  const fetchData = () => {
    var url = window.location.href.split("/");
    var year = url[5];
    console.log(url);

    return fetch("https://adams66.github.io/api/draft-" + year + ".json")
          .then((response) => response.json())
          .then((data) => setDraft(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
    <Sidebar/>
    <div className="main mb-2">
     <Navbar/>
    
    <table className="table ">
        <thead>
    <tr className="text-light">
      <th class="text-center d-none d-md-table-cell" scope="col">Round</th>
      <th class="text-center d-none d-md-table-cell" scope="col">Round Number</th>
      <th class="text-center " scope="col">Overall</th>
      <th class="text-center" scope="col">Player Id</th>
      <th class="text-center" scope="col">Owner</th>
      <th class="text-center" scope="col">Position</th>
      <th class="text-center" scope="col">College</th>

    </tr>
  </thead>
  
      
  <tbody className="text-light">
        {draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (
            <tr>
      <th className="align-middle d-none d-md-table-cell" scope="row"><div className="text-center ">{userObj.Round}</div></th>
      <td className="align-middle d-none d-md-table-cell" ><div className="text-center align-middle">{userObj["Round Number"]}</div></td>
      <td className="align-middle " ><div className="text-center">{userObj.Overall}</div></td>
      <td className="align-middle" ><div className="text-center">{userObj.Player_id}</div></td>
      <td className="align-middle" ><div className="text-center">{userObj.Owner}</div></td>
      <td className="align-middle" ><div className="text-center"><Circle position={userObj} /></div></td>
      <td className="align-middle" ><div className="text-center">{userObj.College}</div></td>
            </tr>
      
          ))}
     </tbody>
    </table>


    </div>
    </div>
  );
}

export default Sdraft;