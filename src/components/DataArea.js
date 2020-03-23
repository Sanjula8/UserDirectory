import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";
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
            <DataAreaContext.Provider
              value={{ developerState, handleSearchChange, handleSort }}
            >
              <Nav />
              <div className="data-area">
                {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
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
