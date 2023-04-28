function Circle(props) {
    var position = props.position;


    switch (position.Position) {

        case "QB":
            return <div style={{borderColor: "#567cff",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light qb-color text-light">
                <div  class="font-bold">{
                    position.Position
                }</div>
            </div>;
        case "RB":
            return <div style={{borderColor: "#652ec7",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light rb-color text-light">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "WR":
            return <div style={{borderColor: "#0066ff",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light wr-color text-light">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "K":
            return <div style={{borderColor: "purple",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light k-color text-light">
                <div >{
                    position.Position
                }</div>
            </div>;
        case "TE":
            return <div style={{borderColor: "green",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light te-color text-light">
                <div >{
                    position.Position
                }</div>
            </div>;
        case "D/ST":
            return <div style={{borderColor: "yellow",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light d-color">
                <div >{
                    position.Position
                }</div>
            </div>;
        default:
            return <div style={{borderColor: "orange",background: "black"}} className="d-flex justify-content-center align-items-center positionCircle text-light other-color">
                <div>{
                    position.Position
                }</div>
            </div>;

    }


}

export default Circle;