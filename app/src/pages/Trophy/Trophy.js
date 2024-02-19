import Foundation from "../../layout/Foundation";

function Trophy() {
    return (  

<Foundation >
<div class="row">
    <div class="col d-flex justify-content-center ">
    <video style={{width:"500px"}} autoPlay loop muted playsinline  src="https://homebase.dal-10.com/public/trophies/winner_trophy.mp4" />

    </div>

    <div class="col d-flex justify-content-center ">

    <video style={{width:"300px"}} autoPlay loop muted playsinline  src="https://homebase.dal-10.com/public/trophies/loser_trophy.mp4" />
    </div>

</div>
</Foundation>
    );
}

export default Trophy;