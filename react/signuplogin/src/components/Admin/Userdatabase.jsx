// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const Userdatabase = () => {
// 	const [user, setUser] = useState([]);

// 	const getdata = async () => {
// 		let res = await fetch("http://localhost:3000/users");
// 		const data = await res.json();
// 		// console.log(data);
// 		setUser(data);
// 	};
// 	useEffect(() => {
// 		getdata();
// 	}, []);

// 	console.log(user);

// 	const deleteit = async (key) => {
// 		let res = await fetch(`http://localhost:3000/users/${key}`, {
// 			method: "DELETE",
// 		});
// 		setUser(user.filter((el) => el.id !== key));
// 	};

// 	const updateit = async (id) => {
// 		// console.log(user)
// 		setUser(user.map((el) => (el.id === id ? { ...el, state: "update" } : el)));
// 	};

// 		const changes = (e, id) => {
// 			const { name, value } = e.target;
// 			setUser(user.map((el) => (el.id === id ? { ...el, [name]: value } : el)));
// 		};

// 	return (
// 		<div>
// 			<table id="userdatabasetable">
// 				<thead>
// 					<tr>
// 						<th>Name</th>
// 						<th>E-mail</th>
// 						<th>Password</th>
// 						<th>Role</th>
// 						<th>Update</th>
// 						<th>Delete</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{user.map((el) => (
// 						<tr key={el.id}>
// 							{el.state == "saved" ? (
// 								<>
// 									<td>{el.name}</td>
// 									<td>{el.email}</td>
// 									<td>{el.password}</td>
// 									<td>{el.role}</td>
// 									<td
// 										style={{ cursor: "pointer" }}
// 										onClick={() => updateit(el.id)}
// 									>
// 										Update
// 									</td>
// 									<td
// 										style={{ cursor: "pointer" }}
// 										onClick={() => deleteit(el.id)}
// 									>
// 										Delete
// 									</td>
// 								</>
// 							) : (
// 								<>
// 									<td>
// 										<input
// 											onChange={changes}
// 											type="text"
// 											name="name"
// 											value={el.name}
// 										/>
// 									</td>
// 									<td>
// 										<input
// 											onChange={changes}
// 											type="text"
// 											name="email"
// 											value={el.email}
// 										/>
// 									</td>
// 									<td>
// 										<input
// 											onChange={changes}
// 											type="text"
// 											name="password"
// 											value={el.password}
// 										/>
// 									</td>
// 									<td>
// 										<input
// 											onChange={changes}
// 											type="text"
// 											name="role"
// 											value={el.role}
// 										/>
// 									</td>
// 									<td
// 										style={{ cursor: "pointer" }}
// 										onClick={() => saveit(el.id)}
// 									>
// 										Confirm
// 									</td>
// 									<td
// 										style={{ cursor: "pointer" }}
// 										onClick={() => deleteit(el.id)}
// 									>
// 										Delete
// 									</td>
// 								</>
// 							)}
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };

// export default Userdatabase;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Userdatabase = () => {
	const [user, setUser] = useState([]);

	// fetch all users
	const getdata = async () => {
		let res = await fetch("http://localhost:3000/users");
		const data = await res.json();
		// ensure every user has a state field
		const withState = data.map((el) => ({ ...el, state: "saved" }));
		setUser(withState);
	};

	useEffect(() => {
		getdata();
	}, []);

	const deleteit = async (id) => {
		await fetch(`http://localhost:3000/users/${id}`, {
			method: "DELETE",
		});
		setUser(user.filter((el) => el.id !== id));
	};

	const updateit = (id) => {
		setUser(user.map((el) => (el.id === id ? { ...el, state: "update" } : el)));
	};

	const handleChange = (e, id) => {
		const { name, value } = e.target;
		setUser(user.map((el) => (el.id === id ? { ...el, [name]: value } : el)));
	};

	const saveit = async (id) => {
		const updatedUser = user.find((el) => el.id === id);
		let newobj = { ...updatedUser, state: "saved" };

		await axios.put(`http://localhost:3000/users/${id}`, newobj);

		setUser(user.map((el) => (el.id === id ? newobj : el)));
	};

	return (
		<div>
			<table id="userdatabasetable" border="1" cellPadding="5">
				<thead>
					<tr>
						<th>Name</th>
						<th>E-mail</th>
						<th>Password</th>
						<th>Role</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{user.map((el) => (
						<tr key={el.id}>
							{el.state === "saved" ? (
								<>
									<td>{el.name}</td>
									<td>{el.email}</td>
									<td>{el.password}</td>
									<td>{el.role}</td>
									<td
										style={{ cursor: "pointer", color: "blue" }}
										onClick={() => updateit(el.id)}
									>
										Update
									</td>
									<td
										style={{ cursor: "pointer", color: "red" }}
										onClick={() => deleteit(el.id)}
									>
										Delete
									</td>
								</>
							) : (
								<>
									<td>
										<input
											onChange={(e) => handleChange(e, el.id)}
											type="text"
											name="name"
											value={el.name}
										/>
									</td>
									<td>
										<input
											onChange={(e) => handleChange(e, el.id)}
											type="text"
											name="email"
											value={el.email}
										/>
									</td>
									<td>
										<input
											onChange={(e) => handleChange(e, el.id)}
											type="text"
											name="password"
											value={el.password}
										/>
									</td>
									<td>
										<input
											onChange={(e) => handleChange(e, el.id)}
											type="text"
											name="role"
											value={el.role}
										/>
									</td>
									<td
										style={{ cursor: "pointer", color: "green" }}
										onClick={() => saveit(el.id)}
									>
										Confirm
									</td>
									<td
										style={{ cursor: "pointer", color: "red" }}
										onClick={() => deleteit(el.id)}
									>
										Delete
									</td>
								</>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Userdatabase;
