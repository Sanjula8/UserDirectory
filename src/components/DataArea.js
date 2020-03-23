import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";

const DataArea = () => {
	const [developerState, setDeveloperState] = useState({
		users: [],
		order: "descend",
		filteredUsers: [],
		headings: [
			{ name: "Image", width: "10%", order: "descend" },
			{ name: "name", width: "10%", order: "descend" },
			{ name: "phone", width: "20%", order: "descend" },
			{ name: "email", width: "20%", order: "descend" },
			{ name: "dob", width: "10%", order: "descend" }
		]
	});

	const handleSort = heading => {
		let currentOrder = developerState.headings
			.filter(elem => elem.name === heading)
			.map(elem => elem.order)
			.toString();

		if (currentOrder === "descend") {
			currentOrder = "ascend";
		} else {
			currentOrder = "descend";
		}

		const searchFunction = (a, b) => {
			if (currentOrder === "ascend") {
				// Accounts for missing values
				if (a[heading] === undefined) {
					return 1;
				} else if (b[heading] === undefined) {
					return -1;
				}
			} else {
				console.log("Done!");
			}
		};
		const sortedUsers = developerState.filteredUsers.sort(searchFunction);
		const updatedHeadings = developerState.headings.map(elem => {
			elem.order = elem.name === heading ? currentOrder : elem.order;
			return elem;
		});

		setDeveloperState({
			...developerState,
			filteredUsers: sortedUsers,
			headings: updatedHeadings
		});
	};
	// Search Function
	const handleSearchChange = event => {
		const filter = event.target.value;
		// Filters through employee users to return values of first and last name when searched
		const filteredList = developerState.users.filter(item => {
			let values =
				item.name.first.toLowerCase() +
				" " +
				item.name.last.toLowerCase();
			console.log(filter, values);
			if (values.indexOf(filter.toLowerCase()) !== -1) {
				return item;
			}
		});

		setDeveloperState({ ...developerState, filteredUsers: filteredList });
	};
	// Use Effect will run after the render is already commited on the screen
	useEffect(() => {
		API.getUsers().then(results => {
			console.log(results.data.results);
			setDeveloperState({
				...developerState,
				users: results.data.results,
				filteredUsers: results.data.results
			});
		});
	}, []);

	return (
		// Thanks to the Context API, we do not need to pass any props through this component
		<DataAreaContext.Provider
			value={{ developerState, handleSearchChange, handleSort }}
		>
			<Nav />
			<div className="data-area">
				{developerState.filteredUsers.length > 0 ? (
					<DataTable />
				) : (
					<div></div>
				)}
			</div>
		</DataAreaContext.Provider>
	);
};

export default DataArea;

// class DataArea extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			users: [{}],
// 			order: "descend",
// 			filteredUsers: [{}]
// 		};
// 	}
// 	componentDidMount() {
// 		//Api Call
// 	}
// 	render() {
// 		return (
// 			<>
// 				<Nav />
// 				<div>
// 					<DataTable />
// 				</div>
// 			</>
// 		);
// 	}
// }

// Hooks:
// function DataArea2 {
// const [order, setOrder] = useState("descend")
// useEffect(() => {
//     //API Call
//     return () => {

//     }
// }, [])

// }

// export default DataArea;
