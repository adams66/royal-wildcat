import Key from "../../../key/key.json";


function Circle(props) {
    var position = props.position;


    switch (position) {

        case "QB":
            return <div style={{borderColor: "#ff3131",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light qb-color text-light">
                <div  class="font-bold">{
                    position
                }</div>
            </div>;
        case "RB":
            return <div style={{borderColor: "#0137B7",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light rb-color text-light">
                <div>{
                    position
                }</div>
            </div>;
        case "WR":
            return <div style={{borderColor: "#39ff14",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light wr-color text-light">
                <div>{
                    position
                }</div>
            </div>;
        case "K":
            return <div style={{borderColor: "#d1fe49",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light k-color text-light">
                <div >{
                    position
                }</div>
            </div>;
        case "TE":
            return <div style={{borderColor: "green",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light te-color text-light">
                <div >{
                    position
                }</div>
            </div>;
        case "D/ST":
            return <div style={{borderColor: "#1F51FF",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light d-color">
                <div >{
                    position
                }</div>
            </div>;
        default:
            return <div style={{borderColor: "orange",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light other-color">
                <div>{
                    position
                }</div>
            </div>;

    }


}

export default Circle;