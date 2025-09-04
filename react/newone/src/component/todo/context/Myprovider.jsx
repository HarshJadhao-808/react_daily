import React from "react";
import { useContext } from "react";
import mycontext from "./Mycontext";
const myprovider = ({ children }) => {
	const data = "Amol";
	return <mycontext.Provider value={data}>{children}</mycontext.Provider>;
};

export default myprovider;
