import React from "react";
import DataBody from "./DataBody";
import { render } from "@testing-library/react";
//Header Names
//DoB
//Image
//Names

function DataTable(props) {
	return (
		<div>
			<table>
				<thead>
					<th>Image</th>
					<th>Name</th>
				</thead>
				<DataBody users={props.users} />
			</table>
		</div>
	);
}

export default DataTable;
