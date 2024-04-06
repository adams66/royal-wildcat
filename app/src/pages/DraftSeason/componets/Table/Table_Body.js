import Circle from "../Circle/Circle";

function Table_Body(props) {

	function nflTeam(team) {
		switch (team) {
			case '0':
				return 'https://homebase.dal-10.com/nfl_logos/kansas_city_chiefs.svg';
			case '1':
				return 'https://homebase.dal-10.com/nfl_logos/arizona_cardinals.svg';
			case '2':
				return 'https://homebase.dal-10.com/nfl_logos/atlanta_falcons.svg';
			case '3':
				return 'https://homebase.dal-10.com/nfl_logos/carolina_panthers.svg';
			case '4':
				return 'https://homebase.dal-10.com/nfl_logos/chicago_bears.svg';
			case '5':
				return 'https://homebase.dal-10.com/nfl_logos/dallas_cowboys.svg';
			case '6':
				return 'https://homebase.dal-10.com/nfl_logos/detriot_lions.svg';
			case '7':
				return 'https://homebase.dal-10.com/nfl_logos/green_bay_packers.svg';
			case '8':
				return 'https://homebase.dal-10.com/nfl_logos/los_angeles_rams.svg';
			case '9':
				return 'https://homebase.dal-10.com/nfl_logos/minnesota_vikings.svg';
			case '10':
				return 'https://homebase.dal-10.com/nfl_logos/new_orleans_saints.svg';
			case '11':
				return 'https://homebase.dal-10.com/nfl_logos/new_york_giants.svg';
			case '12':
				return 'https://homebase.dal-10.com/nfl_logos/philadelphia_eagles.svg';
			case '13':
				return 'https://homebase.dal-10.com/nfl_logos/san_francisco_49ers.svg';
			case '14':
				return 'https://homebase.dal-10.com/nfl_logos/seattle_seahawks.svg';
			case '15':
				return 'https://homebase.dal-10.com/nfl_logos/tampa_bay_buccaneers.svg';
			case '16':
				return 'https://homebase.dal-10.com/nfl_logos/washington_commanders.svg';
			case '17':
				return 'https://homebase.dal-10.com/nfl_logos/baltimore_ravens.svg';

			case '18':
				return 'https://homebase.dal-10.com/nfl_logos/buffalo_bills.svg';

			case '19':
				return 'https://homebase.dal-10.com/nfl_logos/cincinnati_bengals.svg';

			case '20':
				return 'https://homebase.dal-10.com/nfl_logos/cleveland_browns.svg';

			case '21':
				return 'https://homebase.dal-10.com/nfl_logos/denver_broncos.svg';

			case '22':
				return 'https://homebase.dal-10.com/nfl_logos/houston_texans.svg';

			case '23':
				return 'https://homebase.dal-10.com/nfl_logos/indianapolis_colts.svg';

			case '24':
				return 'https://homebase.dal-10.com/nfl_logos/jacksonville_jaguars.svg';

			case '25':
				return 'https://homebase.dal-10.com/nfl_logos/kansas_city_chiefs.svg';
				break;
			case '26':
				return 'https://homebase.dal-10.com/nfl_logos/las_vegas_raiders.svg';

			case '27':
				return 'https://homebase.dal-10.com/nfl_logos/miami_dolphins.svg';

			case '28':
				return 'https://homebase.dal-10.com/nfl_logos/new_england_patriots.svg';

			case '29':
				return 'https://homebase.dal-10.com/nfl_logos/new_york_jets.svg';

			case '30':
				return 'https://homebase.dal-10.com/nfl_logos/pittsburgh_steeler.svg';

			case '31':
				return 'https://homebase.dal-10.com/nfl_logos/tennessee_titans.svg';

			case '32':
				return 'https://homebase.dal-10.com/nfl_logos/los_angeles_chargers.svg';

				


		}
	}











    return (  			<tbody className="text-light">
    {props.data &&
        props.data.length > 0 &&
        props.data.map((userObj, index) => (
            <tr>
                <td className="align-middle d-none d-md-table-cell" scope="row">
                    <div className="text-center fw-bold">{userObj.overall_round}</div>
                </td>
                <td className="align-middle d-none d-md-table-cell">
                    <div className="text-center align-middle fw-bold">{userObj.round_pick}</div>
                </td>
                <td className="align-middle">
                    <div className="text-center fw-bold">{userObj.overall_pick}</div>
                </td>
                <td className="align-middle">
                    <div className="text-center">{userObj.player_name}</div>
                </td>
                <td className="align-middle">
                    <div className="text-center">{userObj.fantasy_player}</div>
                </td>
                <td className="align-middle">
                    <div className="text-center">
                        <Circle position={userObj.position} />
                    </div>
                </td>
                <td className="align-middle">
                    <div className="text-center">
                        <img style={{ width: '50px' }} src={nflTeam(userObj.nfl)} />
                    </div>
                </td>
                <td className="align-middle">
                    <div className="text-center">{userObj.college}</div>
                </td>
            </tr>
        ))}
</tbody>);
}

export default Table_Body;