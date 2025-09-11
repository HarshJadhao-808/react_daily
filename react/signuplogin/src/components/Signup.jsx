import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
	const navigator=useNavigate()
	const [arr, setarr] = useState(
		JSON.parse(localStorage.getItem("signup_data")) || []
	);
	const [userdata, setuserdata] = useState({
		name: "",
		email: "",
		password: "",
	});
	const sendit = async () => {
		event.preventDefault();
		let res = await fetch("http://localhost:3000/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...userdata, role: "user",state:"saved" }),
		});

		Swal.fire({
			// position: "top-end",
			icon: "success",
			title: "Signup Sucessful",
			showConfirmButton: false,
			timer: 1500,
		});
		navigator("/login");

	};

	const handlechange = (e) => {
		setuserdata({ ...userdata, [e.target.name]: e.target.value });
	};
	return (
		<div id="main">
			<form onSubmit={sendit} id="form">
				<label>Username</label>
				<br />
				<input type="text" onChange={handlechange} name="name" />

				<br />
				<br />
				<label>G-mail</label>
				<br />
				<input type="email" onChange={handlechange} name="email" />
				<br />
				<br />
				<label>Password</label>
				<br />
				<input type="password" onChange={handlechange} name="password" />
				<br />
				<br />
				<input id="submit" type="submit" value={"Signup"} />
			</form>
		</div>
	);
};

export default Signup;
