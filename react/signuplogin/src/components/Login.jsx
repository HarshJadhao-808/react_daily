import React, { use, useContext, useState } from "react";
import { Mycontext } from "./Mycontext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
	const { setUser_obj ,login ,setrole } = useContext(Mycontext);
	const navigator = useNavigate();
	const [logindata, setlogindata] = useState({
		email: "",
		password: "",
	});
	const makeit = (e) => {
		setlogindata({ ...logindata, [e.target.name]: e.target.value });
	};

	const checkit = async (event) => {
		event.preventDefault();
		let res = await fetch("http://localhost:3000/users");
		let signupdata = await res.json();
		signupdata.find((data) => {
			if (data.email == logindata.email) {
				if (data.password == logindata.password) {
				if(data.role == "user"){
					Swal.fire({
						// position: "top-end",
						icon: "success",
						title: "Login Sucessful",
						showConfirmButton: false,
						timer: 1500,
					});
					navigator("/")
					login(data.name)
					setUser_obj(data)
					setrole(data.role)
				}else{
					Swal.fire({
						position: "top",
						icon: "success",
						title: `Hello ${data.name}`,
						theme:"borderless",
						showConfirmButton: false,
						timer: 1500,
					});
					navigator("/Admin")
					setUser_obj(data)
					login(data);

				}
						}	
				else {
					Swal.fire({
						// position: "top-end",
						icon: "error",
						title: "Wrong Password",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			} else {
				Swal.fire({
					// position: "top-end",
					icon: "warning",
					title: "Invalid Credentials",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	return (
		<div id="main">
			<form onSubmit={checkit} id="form">
				<label>G-mail</label>
				<br />
				<br />
				<input type="text" onChange={makeit} name="email" />
				<br />
				<br />
				<label>Password</label>
				<br />
				<input type="password" onChange={makeit} name="password" />
				<br />
				<br />
				<input id="submit" type="submit" value={"Login"} />
			</form>
		</div>
	);
};

export default Login;
