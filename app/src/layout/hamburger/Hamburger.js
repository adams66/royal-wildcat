import "./hamburger.css";


function Hamburger(props) {
    return ( 
        <div  onClick={props.hamburgerFunction}  className={props.hamburgerClass} >
        <div className ="position-relative h-100">
        <div className="line lineA rounded"></div>
        <div className="line lineB rounded"></div>
        <div className="line lineC rounded"></div>
        </div>
    </div>
     );


}

export default Hamburger;