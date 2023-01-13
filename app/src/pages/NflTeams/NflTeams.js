import { useEffect, useState } from "react";
import Foundation from '../../layout/Foundation';
import "./NflTeams.css";


function NflTeams(){
    const [width, setWidth] = useState(window.innerWidth);
    const [teams,setTeams] = useState([0]);
    const [theme,setTheme] = useState([0]);

    function createMarkup(svg){
        return{__html:svg}
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

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);

    }

    function componentWillMount() {
        window.addEventListener('resize', handleWindowSizeChange);
    }

    componentWillMount();





    const fetchData = () => {


        




            return fetch("https://adams66.github.io/api/nflTeams/nfl_teams.json")
            .then((response) => response.json())
            .then((data) => {
                
              setTeams(data[2].data)

            });


        
    }


    useEffect(() => {
        fetchData();
        getTheme();
    }, [])


    if (width >= 700) {


    return(
        <Foundation>





                        <table className="table m-3 ">
                    <thead className={theme}>
                        <tr className="text-light">
                            <th 
                                class="text-center d-none d-md-table-cell"
                                scope="col">id</th>
                            <th 
                                class="text-center d-none d-md-table-cell"
                                scope="col">Team</th>
                            <th 
                                class="text-center"
                                scope="col">Year Established</th>
                                                        <th 
                                class="text-center"
                                scope="col">Logo</th>

                        </tr>
                    </thead>
        <tbody>

  {teams && teams.length > 0 && teams.map((userObj, index) => (<tr style={{color:"white"}} className={theme}>
                            <th  
                                className="align-middle d-none d-md-table-cell"
                                scope="row">
                                <div className="text-center ">
                                    {
                                    userObj.id
                                }</div>
                            </th>
                            <td 
                                className="align-middle d-none d-md-table-cell">
                                <div className="text-center align-middle">
                                    {
                                    userObj.team
                                }</div>
                            </td>
                            <td 
                                className="align-middle ">
                                <div className="text-center">
                                    {
                                    userObj.established_year
                                }</div>
                            </td>

                            <td 
                                className="align-middle ">
                                <div dangerouslySetInnerHTML={createMarkup(userObj.logo)} className="text-center">
                                </div>
                            </td>
                           
                        </tr> ))
                    } </tbody>
                </table>   
    </Foundation>
    )

                }
                else{
                
return(
<Foundation>
               
               {
               
               teams && teams.length > 0 && teams.map((userObj, index) => (
                   <div style={{borderWidth: "2px", borderColor: "grey", borderStyle: "solid", color:"white"}} className="row pt-2 m-2 rounded" >
                       <div className="col-9 d-flex flex-column ">
                       <div className='text-light'>id: {userObj.id}</div>
                   
                         <h6 className='text-light'>{userObj.team}</h6>
                         <h2>{userObj.established_year}</h2>
                       </div>
                       <div dangerouslySetInnerHTML={createMarkup(userObj.logo)} className="col-3 d-flex align-items-center justify-content-end">
                         
                           </div>

                     </div>

               ))
           } 

       </Foundation>
)
                }
   


}

export default NflTeams;