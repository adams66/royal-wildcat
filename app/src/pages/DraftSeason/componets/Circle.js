function Circle(props) {
    var position = props.position;


    switch (position.Position) {

        case "QB":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light qb-color text-light">
                <div class="text-light">{
                    position.Position
                }</div>
            </div>;
        case "RB":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light rb-color text-light">
                <div class="text-light">{
                    position.Position
                }</div>
            </div>;
        case "WR":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light wr-color text-light">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "K":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light k-color text-light">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "TE":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light te-color text-light">
                <div>{
                    position.Position
                }</div>
            </div>;
        case "D/ST":
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light d-color">
                <div>{
                    position.Position
                }</div>
            </div>;
        default:
            return <div className="d-flex justify-content-center align-items-center positionCircle text-light other-color">
                <div>{
                    position.Position
                }</div>
            </div>;

    }


}

export default Circle;