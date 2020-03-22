import React from "react";
import SearchBox from "./SearchBox";

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="navbar collapse row">
				<SearchBox />
			</div>
		</nav>
	);
}

export default Nav;
