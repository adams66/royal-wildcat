import Key from '../../key/key.json';
import React, {useEffect, useState} from "react";
import "./draftSeason.css";
import Foundation from '../../layout/Foundation';
import Circle from './componets/Circle';










function Sdraft() {
    const [width, setWidth] = useState(window.innerWidth);
    const [draft, setDraft] = useState([]);
    const [round, setRound] = useState(1);
    const [theme, setTheme] = useState();
    var url = window.location.href.split("/");
    var year = url[5];

    const fetchData = (year, url) => {


        console.log(url);




            return fetch("https://adams66.github.io/api/draft-" + year + ".json").then((response) => response.json()).then((data) => {
                
                setDraft(data)

            });


        
    }


    function getTheme(){
        var value = localStorage.getItem("theme");
    
        switch(value){
            case "wildcat": 
            setTheme(value);
            break;
        
            case "chief":
            setTheme(value);
            break;
        
            case "jayhawk": 
            setTheme(value);
            break;
        
            default:
            setTheme("wildcat");
            
            
          }
    }





    useEffect((year, url) => {
        var url = window.location.href.split("/");
        var year = url[5];
        fetchData(year, url);
        getTheme();
    }, [])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);

    }

    function page(draft, round) {
        var a = window.event.target.text;
      
        if (a == "Next" && round != draft.rounds ) {


            setRound(round + 1);
            console.log(round);
        }
         else if (a =="Previous" && round != 1) {
            console.log("Previous");
            setRound(round - 1);
        }
        else{
            
        }
    }

    function componentWillMount() {
        window.addEventListener('resize', handleWindowSizeChange);
    }

    componentWillMount();


    if (width >= 700) {

        return (

            <Foundation>

                <table className="table m-3 ">
                    <thead className={theme}>
                        <tr className="text-light">
                            <th 
                                class="text-center d-none d-md-table-cell"
                                scope="col">Round</th>
                            <th 
                                class="text-center d-none d-md-table-cell"
                                scope="col">Round Number</th>
                            <th 
                                class="text-center "
                                scope="col">Overall</th>
                            <th 
                                class="text-center"
                                scope="col">Player Id</th>
                            <th 
                                class="text-center"
                                scope="col">Owner</th>
                            <th 
                                class="text-center"
                                scope="col">Position</th>
                            <th 
                                class="text-center"
                                scope="col">College</th>

                        </tr>
                    </thead>


                    <tbody className="text-light">
                        {
                        draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (userObj.Round === round ? <tr className={theme}>
                            <th  
                                className="align-middle d-none d-md-table-cell"
                                scope="row">
                                <div className="text-center ">
                                    {
                                    userObj.Round
                                }</div>
                            </th>
                            <td 
                                className="align-middle d-none d-md-table-cell">
                                <div className="text-center align-middle">
                                    {
                                    userObj["Round Number"]
                                }</div>
                            </td>
                            <td 
                                className="align-middle ">
                                <div className="text-center">
                                    {
                                    userObj.Overall
                                }</div>
                            </td>
                            <td 
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.Player_id
                                }</div>
                            </td>
                            <td 
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.Owner
                                }</div>
                            </td>
                            <td 
                                className="align-middle">
                                <div className="text-center"><Circle position={userObj}/></div>
                            </td>
                            <td 
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.College
                                }</div>
                            </td>
                        </tr> : null))
                    } </tbody>
                </table>


                <nav aria-label="Page navigation example ">
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item">
                            <a style={round == 1 ? {background:"red"} : null} className= {theme + " pageChanger btn  text-light"}
                                onClick={() => page(draft, round)}>Previous</a>
                        </li>
                        <li  className="page-item">
                            <a style={round == draft.rounds ? {background:"red"} : null} className={theme + " pageChanger btn text-light"}
                                onClick={() => page(draft, round)}>Next</a>
                        </li>


                    </ul>
                </nav>
            </Foundation>


        );
    } else {
        return (


            <Foundation>
               
                    {
                    draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (
                        <div style={{border: "2px solid rgb(102,16,242) "}} className="row pt-2 m-2 rounded">
                            <div className="col-9 d-flex flex-column ">
                            <div className='text-light'>Round: {userObj.Round}</div>
                            <div className='text-light'>Overall: {userObj.Overall}</div>
                              <h6 className='text-light'>{userObj.Player_id}</h6>
                              <h6 className="text-light">{userObj.Owner}</h6>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-end">
                                <Circle position={userObj}></Circle>
                                </div>

                          </div>

                    ))
                } 

            </Foundation>

        )
    }

}

export default Sdraft;
