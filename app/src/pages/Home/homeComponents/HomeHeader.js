import  Key from "../../../key/key.json";



function HomeHeader(){

    return(
        <div className="row">
            <div  className="col p-0 ">
                <div style={{height: "400px", backgroundColor: Key.component }} className=" m-3 m-md-4 m-lg-5 rounded header">
                    <h1 style={{color:"#fff"}}>Royal Wildcat Fantasy</h1>
                </div>
            </div>
        </div>

    );




}

export default HomeHeader;