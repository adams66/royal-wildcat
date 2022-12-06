import Sidebar from "./sidebar/Sidebar";
import NavBar  from "./navbar/Navbar";
import Main from "./main/Main";
import Footer from "./Footer/Footer"





function Foundation(props){


return(
<div>
<Sidebar />
<Main>

{props.children}

<Footer />
</Main>


</div>

)
}



export default Foundation;