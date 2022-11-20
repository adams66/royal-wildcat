import Key from '../../key/key.json';
import React, {useEffect, useState} from "react";
import "./draftSeason.css";
import Foundation from '../../layout/Foundation';




function Circle(props) {
    var position = props.position;


    switch (position.Position) {

        case "QB":
            return <div className="d-flex justify-content-center align-items-center positionCircle qb-color">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "RB":
            return <div className="d-flex justify-content-center align-items-center positionCircle rb-color">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "WR":
            return <div className="d-flex justify-content-center align-items-center positionCircle wr-color">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "K":
            return <div className="d-flex justify-content-center align-items-center positionCircle k-color">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "TE":
            return <div className="d-flex justify-content-center align-items-center positionCircle te-color">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "D/ST":
            return <div className="d-flex justify-content-center align-items-center positionCircle d-color">
                <div>{
                    position.Position
                }</div>
            </div>;
        default:
            return <div className="d-flex justify-content-center align-items-center positionCircle other-color">
                <div>{
                    position.Position
                }</div>
            </div>;

    }


}


function Sdraft() {
    const [width, setWidth] = useState(window.innerWidth);
    const [draft, setDraft] = useState([]);
    const [round, setRound] = useState(1);
    var url = window.location.href.split("/");
    var year = url[5];

    const fetchData = (year, url) => {


        console.log(url);

        if (Key.draft.includes(year)) {


            return fetch("https://adams66.github.io/api/draft-" + year + ".json").then((response) => response.json()).then((data) => {
                setDraft(data)
                
            });


        }
    }

    useEffect((year, url) => {
        var url = window.location.href.split("/");
        var year = url[5];
        fetchData(year, url);
    }, [])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);

    }

    function page(){
        var a = window.event.target.text;
        console.log(draft.round)
      if(a == "Next" ){

        
        setRound(round + 1);
        console.log(round);
      }
      else{
        console.log("Previous");
        setRound(round - 1);
      }
    }

    function componentWillMount() {
        window.addEventListener('resize', handleWindowSizeChange);
    }

    componentWillMount();


    if (width >= 700) {

        return (
     
<Foundation>

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
                            {
                            draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (

                               userObj.Round === round ?
                                <tr>
                                    <th className="align-middle d-none d-md-table-cell" scope="row">
                                        <div className="text-center ">
                                            {
                                            userObj.Round
                                        }</div>
                                    </th>
                                    <td className="align-middle d-none d-md-table-cell">
                                        <div className="text-center align-middle">
                                            {
                                            userObj["Round Number"]
                                        }</div>
                                    </td>
                                    <td className="align-middle ">
                                        <div className="text-center">
                                            {
                                            userObj.Overall
                                        }</div>
                                    </td>
                                    <td className="align-middle">
                                        <div className="text-center">
                                            {
                                            userObj.Player_id
                                        }</div>
                                    </td>
                                    <td className="align-middle">
                                        <div className="text-center">
                                            {
                                            userObj.Owner
                                        }</div>
                                    </td>
                                    <td className="align-middle">
                                        <div className="text-center"><Circle position={userObj}/></div>
                                    </td>
                                    <td className="align-middle">
                                        <div className="text-center">
                                            {
                                            userObj.College
                                        }</div>
                                    </td>
                                </tr>
                                : null

                            ))
                        } </tbody>
                    </table>


                    <nav aria-label="Page navigation example">
  <ul className="pagination ">
  <li className="page-item"><a className="page-link"  onClick={page}>Previous</a></li>
    <li className="page-item"><a className="page-link"  onClick={ page}>Next</a></li>


  </ul>
</nav>
</Foundation>

           
     
        );
    } else {
        return (


<Foundation>   
                    <div className="row p-0">
                        {
                        draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (

                     
                            <div className="col-12  p-0 ">
                                <div style={
                                        {borderRadius: "25px"}
                                    }
                                    className="details bg-dark m-2 p-2">
                                    <h5 className="p-3 card-title text-center">
                                        {
                                        userObj["Overall"]
                                    }</h5>
                                    <Circle position={userObj}/>
                                    <h4 className="p-3 card-title text-center">
                                        {
                                        userObj.Owner
                                    }</h4>
                                    <h5 className="mt-1 card-title text-center">
                                        {
                                        userObj["Player_id"]
                                    }</h5>
                                    <h4 className="mt-1 card-title text-center">
                                        {
                                        userObj.College
                                    }</h4>

                                </div>
                            </div>
                    

                        ))
                    } </div>

</Foundation> 

        )
    }

}

export default Sdraft;
