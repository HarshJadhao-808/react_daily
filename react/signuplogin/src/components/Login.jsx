import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Mycontext } from "./Mycontext";
import { useNavigate } from "react-router-dom";
import "../../src/App.css";
const Login = () => {
  const navigator=useNavigate()
	const arr = JSON.parse(localStorage.getItem("signup_data")) || [];
	const login = useContext(Mycontext);
	const [gmail, setgmail] = useState("");
	const [pass, setpass] = useState("");
	const findname = (name) => {
		const Username = name;
		localStorage.setItem("Username", JSON.stringify(Username));
	};

  
	const checkit = (event) => {
		event.preventDefault();
		arr.map((el) => {
			if (gmail == el.gmail) {
				if (pass == el.pass) {
					console.log("You are authorized");
					findname(el.name);
          navigator("/")
					alert("You are authorized");
				} else {
					console.log("Your password is incorrect");
				}
			} else {
				console.log("Your gmail is incorrect");
			}
		});
	};
	return (
		<div>
			<form onSubmit={checkit} id="form">
				<label>G-mail</label>
				<br />
				<br />
				<input type="text" onChange={(el) => setgmail(el.target.value)} />
				<br />
				<br />
				<label>Password</label>
				<br />
				<input type="number" onChange={(el) => setpass(el.target.value)} />
				<br />
				<br />
				<input id="submit" type="submit" value={"Login"} />
			</form>
		</div>
	);
};

export default Login;
