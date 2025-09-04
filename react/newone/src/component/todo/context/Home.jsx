import React, { useContext } from "react";
import mycontext from "./Mycontext";

const home = () => {
	let data = useContext(mycontext);
	return (
		<div>
			<h1>Hello my name is {data}</h1>
		</div>
	);
};

export default home;
