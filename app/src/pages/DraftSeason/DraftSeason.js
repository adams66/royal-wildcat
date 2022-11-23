import Key from '../../key/key.json';
import React, {useEffect, useState} from "react";
import "./draftSeason.css";
import Foundation from '../../layout/Foundation';


function Circle(props) {
    var position = props.position;


    switch (position.Position) {

        case "QB":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light qb-color text-light">
                <div class="text-light">{
                    position.Position
                }</div>
            </div>;
        case "RB":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light rb-color text-light">
                <div class="text-light">{
                    position.Position
                }</div>
            </div>;
        case "WR":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light wr-color text-light">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "K":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light k-color text-light">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "TE":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light te-color text-light">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "D/ST":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light d-color">
                <div>{
                    position.Position
                }</div>
            </div>;
        default:
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light other-color">
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

    function page() {
        var a = window.event.target.text;
        console.log(draft.round)
        if (a == "Next") {


            setRound(round + 1);
            console.log(round);
        } else {
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

                <table className="table m-3 ">
                    <thead>
                        <tr className="text-light">
                            <th style={
                                    {borderColor: Key.buttons}
                                }
                                class="text-center d-none d-md-table-cell"
                                scope="col">Round</th>
                            <th style={
                                    {borderColor: Key.buttons}
                                }
                                class="text-center d-none d-md-table-cell"
                                scope="col">Round Number</th>
                            <th style={
                                    {borderColor: Key.buttons}
                                }
                                class="text-center "
                                scope="col">Overall</th>
                            <th style={
                                    {borderColor: Key.buttons}
                                }
                                class="text-center"
                                scope="col">Player Id</th>
                            <th style={
                                    {borderColor: Key.buttons}
                                }
                                class="text-center"
                                scope="col">Owner</th>
                            <th style={
                                    {borderColor: Key.buttons}
                                }
                                class="text-center"
                                scope="col">Position</th>
                            <th style={
                                    {borderColor: Key.buttons}
                                }
                                class="text-center"
                                scope="col">College</th>

                        </tr>
                    </thead>


                    <tbody className="text-light">
                        {
                        draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (userObj.Round === round ? <tr>
                            <th style={
                                    {borderColor: Key.buttons}
                                }
                                className="align-middle d-none d-md-table-cell"
                                scope="row">
                                <div className="text-center ">
                                    {
                                    userObj.Round
                                }</div>
                            </th>
                            <td style={
                                    {borderColor: Key.buttons}
                                }
                                className="align-middle d-none d-md-table-cell">
                                <div className="text-center align-middle">
                                    {
                                    userObj["Round Number"]
                                }</div>
                            </td>
                            <td style={
                                    {borderColor: Key.buttons}
                                }
                                className="align-middle ">
                                <div className="text-center">
                                    {
                                    userObj.Overall
                                }</div>
                            </td>
                            <td style={
                                    {borderColor: Key.buttons}
                                }
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.Player_id
                                }</div>
                            </td>
                            <td style={
                                    {borderColor: Key.buttons}
                                }
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.Owner
                                }</div>
                            </td>
                            <td style={
                                    {borderColor: Key.buttons}
                                }
                                className="align-middle">
                                <div className="text-center"><Circle position={userObj}/></div>
                            </td>
                            <td style={
                                    {borderColor: Key.buttons}
                                }
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.College
                                }</div>
                            </td>
                        </tr> : null))
                    } </tbody>
                </table>


                <nav aria-label="Page navigation example">
                    <ul className="pagination ">
                        <li className="page-item">
                            <a className="page-link"
                                onClick={page}>Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link"
                                onClick={page}>Next</a>
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
                        <div style={{border: "1px solid rgb(102,16,242) "}} className="row pt-2 m-2 rounded">
                            <div className="col-8 d-flex flex-column ">
                            <div className='text-light'>Round: {userObj.Round}</div>
                            <div className='text-light'>Overall: {userObj.Overall}</div>
                              <h6 className='text-light'>{userObj.Player_id}</h6>
                              <h6 className="text-light">{userObj.Owner}</h6>
                            </div>
                            <div className="col-4 d-flex align-items-center justify-content-end">
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
