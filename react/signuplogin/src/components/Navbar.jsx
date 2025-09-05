import React, { useContext, useEffect } from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { Mycontext } from "./Mycontext";
const Navbar = () => {
	const { Name, logout } = useContext(Mycontext);

  

	return (
		<nav>
			<ul>
				<li>
					<Link to="/">
						<img id="logo" src="../../src/assets/Hweb.png" alt="" />
					</Link>
				</li>
			</ul>
			
			{!Name ? 
				<ul id="pages">
					<li>
						<Link className="link" to="/signup">
							Signup
						</Link>
					</li>
					<li>
						<Link className="link" to="/login">
							Login
						</Link>
					</li>
				</ul>: <ul>
					<li>{Name}</li>
					<li>
						<button onClick={logout}>Logout</button>
					</li>
				</ul>	
			}
		</nav>
	);
};

export default Navbar;
