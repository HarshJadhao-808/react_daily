import React, { createContext, useEffect, useState } from "react";

export const Mycontext = createContext();

const Contextprovider = ({ children }) => {
	const [User_obj, setUser_obj] = useState(null);
	
     
	const logout = () => {
		setUser_obj(null)
	};
	const login = (username) => {
		localStorage.setItem("Username", JSON.stringify(username));
		setName(username); // 
	};

	const age = "34";
	return (
		<div>
			<Mycontext.Provider value={{ User_obj,  setUser_obj , logout , login}}>
				{children}
			</Mycontext.Provider>
		</div>
	);
};

export default Contextprovider;
