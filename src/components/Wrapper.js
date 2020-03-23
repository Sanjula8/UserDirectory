import React from "react";
import "./Main";

// Passes in props to display header and main in react app
function Wrapper(props) {
	// Creates a new HTML property called main where the properties are passed through
	return <main className="wrapper" {...props}></main>;
}

export default Wrapper;
