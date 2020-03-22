import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";
import DataAreaContext from "../utils/DataAreaContext";


class DataArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [{}],
			order: "descend",
			filteredUsers: [{}]
		};
	}
	componentDidMount() {
		//Api Call
	}
	render() {
		return (
			<>
				<Nav />
				<div>
					<DataTable />
				</div>
			</>
		);
	}
}

// Hooks:
function DataArea2 {
const [order, setOrder] = useState("descend")
useEffect(() => {
    //API Call
    return () => {

    }
}, [])

}

export default DataArea;
