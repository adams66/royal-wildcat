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




            return fetch("https://adams66.github.io/api/draft/draft-" + year + ".json").then((response) => response.json()).then((data) => {
                
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
        window.scrollTo(0,0);
        var url = window.location.href.split("/");
        var year = url[5];
        fetchData(year, url);
        getTheme();
    }, [])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);

    }

    function page(draft, round,event) {
    
   
        if (event == "Next" && round != draft.rounds ) {
            setRound(round + 1);
        }
         else if (event =="Previous" && round != 1) {
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
                            <th class="text-center d-none d-md-table-cell"  scope="col">Round</th>
                            <th class="text-center d-none d-md-table-cell"  scope="col">Round Number</th>
                            <th class="text-center"                         scope="col">Overall</th>
                            <th class="text-center"                         scope="col">Player Id</th>
                            <th class="text-center"                         scope="col">Owner</th>
                            <th class="text-center"                         scope="col">Position</th>
                            <th class="text-center"                         scope="col">College</th>
                        </tr>
                    </thead>
                    <tbody className="text-light">
                        {
                        draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (userObj.Round === round ? <tr className={theme}>
                            <th className="align-middle d-none d-md-table-cell" scope="row">
                                <div className="text-center ">{userObj.Round}</div>
                            </th>
                            <td className="align-middle d-none d-md-table-cell">
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
                        <li className="page-item m-1">
                            <a  onClick={(event) => page(draft, round,"Previous")}  style={round == 1 ? {background:"red"} : null} className= {theme + " pageChanger btn  text-light"}
                                ><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                              </svg></a>
                        </li>
                        <li  className="page-item m-1">
                            <a  onClick={(event) => page(draft, round,"Next")}  style={round == draft.rounds ? {background:"red"} : null} className={theme + " pageChanger btn text-light"}
                                ><svg id="Next" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                              </svg></a>
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
                        <div style={{borderWidth: "2px", borderColor: "grey", borderStyle: "solid"}} className="row pt-2 m-2 rounded" >
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
