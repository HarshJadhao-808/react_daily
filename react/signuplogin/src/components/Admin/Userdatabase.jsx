import React, { useState, useEffect } from "react";
import axios from 'axios';
const Userdatabase = () => {
	const [user, setUser] = useState([]);

	const getdata = async () => {
		let res = await fetch("http://localhost:3000/users");
		const data = await res.json();
		// console.log(data);
		setUser(data);
	};
	useEffect(()=>{
		getdata();
	},[])

    const deleteit = async(key) => {
			let res = await fetch(`http://localhost:3000/users/${key}`, {
				method: "DELETE",
            });
			setUser(user.filter((el)=> el.id !== key ))
		}
		const updateit = async(id) => {
		    	await axios.put(`http://localhost:3000/users/${id}`,{...user,state : "update"});
		}

	return (
		<div>
			<table id="userdatabasetable">
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
							{el.state=="saved" ? 
							<td>{el.name}</td>
							:
							<input type="text" value={el.name} />
						}
							<td>{el.email}</td>
							<td>{el.password}</td>
							<td>{el.role}</td>
							<td style={{cursor : "pointer"}} onClick={() => updateit(el.id)}>Update</td>
							<td style={{cursor : "pointer"}} onClick={() => deleteit(el.id)}>Delete</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Userdatabase;
