function Square(props) {
    var position = props.position;


    switch (position.Position) {

        case "QB":
        return "qb-square";
        break;
   
        case "RB":
            return String("row pt-2 m-2 rounded rb-square");
        break;

        case "WR":
            return String("row pt-2 m-2 rounded wr-square");
        break;

        case "K":
            return String("row pt-2 m-2 rounded k-square");
        break;

        case "TE":
            return String("row pt-2 m-2 roundedte-square");
        break;
 
        case "D/ST":
            return "row pt-2 m-2 roundedqb-square";
        break;

        default:
            return "other-square";

    }


}

export default Square;