import React, { useContext } from "react";
import DataBody from "./DataBody";
import DataAreaContext from "../utils/DataAreaContext";

const DataTable = () => {
	const context = useContext(DataAreaContext);
	// We access the value stored in context
	return (
		<div className="datatable mt-5">
			<table
				id="table"
				className="table table-striped table-hover table-condensed"
			>
				{/* Created table, passed in variables to fetch them  */}
				<thead>
					<tr>
						{context.developerState.headings.map(
							({ name, width }) => {
								return (
									<th
										className="col"
										key={name}
										style={{ width }}
										onClick={() => {
											context.handleSort(name);
										}}
									>
										{name}
										<span className="pointer"></span>
									</th>
								);
							}
						)}
					</tr>
				</thead>

				<DataBody />
			</table>
		</div>
	);
};

export default DataTable;

//Header Names
//DoB
//Image
//Names

// function DataTable {
//     <div>
//         <table>
//             <thead>
//                 <th>
//                     Image
//                 </th>
//             </thead>
//         </table>
//     </div>
// }
