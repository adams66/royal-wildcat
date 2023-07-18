import  Key from "../../../key/key.json";



function HomeHeader(props){

    return(
        <div style={{height: "500px", overflow:"hidden"}} className="row m-5 p-0 rounded">
            <div style={{height: "100%",position: "relative" }}  className="col p-0 m-0  rounded">
                <div className="videoOverlay"></div>
                <video className="video" style={{width: "100%"}} autoPlay muted loop playsInline src="./video.mp4" />
                <img class="header-logo" style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%, -50%)",zIndex: 5, opacity:"0.9"}}  src="./logo.png" />
            </div>
        </div>
    );
}

export default HomeHeader;