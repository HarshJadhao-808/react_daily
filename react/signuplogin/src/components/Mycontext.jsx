import React, { createContext, useEffect, useState } from "react";

export const Mycontext = createContext();

const Contextprovider = ({ children }) => {
	const [Name, setName] = useState(null);
	useEffect(() => {
		const Username = JSON.parse(localStorage.getItem("Username"));
		if (Username) {
			setName(Username);
		}
	}, [Name]);
	const logout = () => {
		localStorage.removeItem("Username");
		setName(null);
	};
	const login = (username) => {
		localStorage.setItem("Username", JSON.stringify(username));
		setName(username); // ✅ triggers Navbar re-render
	};

	const age = "34";
	return (
		<div>
			<Mycontext.Provider value={{ Name, logout , login}}>
				{children}
			</Mycontext.Provider>
		</div>
	);
};

export default Contextprovider;
