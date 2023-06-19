
import Table_Head from './Table_Head';
import Table_Body from './Table_Body';

function Draft_Table(props) {


	return (
		<table className="table m-3 ">
            <Table_Head />
            <Table_Body data={props.data} />

		</table>
	);
}

export default Draft_Table;
