import Sidebar from "./sidebar/Sidebar";
import NavBar  from "./navbar/Navbar";
import Main from "./main/Main";





function Foundation(props){


return(
<div>
<Sidebar />
<Main>

{props.children}


</Main>
</div>

)
}



export default Foundation;