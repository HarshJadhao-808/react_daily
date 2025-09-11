import React, { useContext, useEffect } from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { Mycontext } from "./Mycontext";
const Navbar = () => {
	const { User_obj, logout } = useContext(Mycontext);
    let User = JSON.parse(localStorage.getItem("User"));
//   console.log(User_obj);

	return (
		<nav>
			<ul>
				<li>
					<Link to="/">
						<img id="logo" src="../../src/assets/Hweb.png" alt="" />
					</Link>
				</li>
			</ul>

			{User ? (
				User.role === "user" ? (
					<ul>
						<li>{User.name}</li>
						<li>
							<button onClick={logout}>Logout</button>
						</li>
					</ul>
				) : User.role === "admin" ? (
					<ul id="admin_pages">
						<li>
							<Link className="link" to="/">
								Home
							</Link>

							
						</li>
						<li>
							<Link className="link" to="/userdatabase">
								User Database
							</Link>
						</li>
						<li>
							<Link className="link" to="/productdatabase">
								Product database
							</Link>
						</li>
						<li>
							<button id="logout" onClick={logout}>Logout</button>
						</li>
					</ul>
				) : null
			) : (
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
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
