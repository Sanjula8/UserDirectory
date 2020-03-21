import React from "react";

function SearchBox() {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="search">Search:</label>
				<input
					name="search"
					type="text"
					className="form-control"
					id="search"
				/>
				<br />
				<button className="btn btn-primary">Search</button>
			</div>
		</form>
	);
}

export default SearchBox;
