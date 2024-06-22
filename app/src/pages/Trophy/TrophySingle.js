function TrophySingle(props){


    if(props.trophy == 1){
        return(
            <video style={{width:"400px"}} autoPlay loop muted  src="https://homebase.dal-10.com/public/trophies/winner_trophy.mp4" />
        )
    }

    else{
        return(
            <video style={{width:"400px"}} autoPlay loop muted   src="https://homebase.dal-10.com/public/trophies/loser_trophy.mp4" />
        )
    }





}

export default TrophySingle;