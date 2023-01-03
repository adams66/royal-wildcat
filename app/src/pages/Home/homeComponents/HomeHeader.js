import  Key from "../../../key/key.json";



function HomeHeader(){

    return(
        <div className="row m-4 m-md-3">
            <div  className="col p-0 m-0 m-md-5 rounded">
            <div  id="carouselExampleFade" className="carousel slide carousel-fade  rounded" data-bs-ride="carousel">
  <div className="carousel-inner rounded">
    <div className="carousel-item active ">
      <img style={{objectFit:"cover"}} height="500px" src="./splash.gif" className="d-block w-100" alt="..." />
      <div className="overlay d-flex justify-content-center align-items-center"><h1 className="text-light">ROYAL WILDCAT</h1></div>
    </div>

    <div className="carousel-item  ">
      <img style={{objectFit:"cover"}} height="500px" src="./splash.gif" className="d-block w-100" alt="..." />
      <div className="overlay d-flex justify-content-center align-items-center"><h1 className="text-light">Fantasy</h1></div>
    </div>


  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


                {/* <div style={{height: "400px", backgroundColor: Key.component }} className=" m-3 m-md-4 m-lg-5 rounded header">
                    <h1 style={{color:"#fff"}}>Royal Wildcat Fantasy</h1>
                </div> */}
            </div>
        </div>

    );




}

export default HomeHeader;