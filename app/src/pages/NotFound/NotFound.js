import { useEffect } from "react";

function NotFound(){

   function messageAction(){

    document.querySelector(".fixthat").style.opacity = 1;

    setTimeout(()=>{window.location.replace("/")}, 2000)
   }

    useEffect(() => {

        setTimeout(messageAction, 3000)


   
    }, [])


return(

<div style={{height:"100vh"}} className="container">

<div style={{height:"100%"}} className="row d-flex justify-content-center align-items-center">

    <div  className="col">
    <h1 className="text-center text-light">It appears that you are lost.</h1>
    <h2 style={{opacity: "0", transition:"0.3s ease-in-out"}} className="fixthat text-center text-light">I can fix that...</h2>
    </div>

</div>


</div>




)




}


export default NotFound;