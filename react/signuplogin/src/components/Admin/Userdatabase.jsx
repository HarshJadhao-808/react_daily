import React, { useState, useEffect } from "react";
import axios from "axios";
const Userdatabase = () => {
	
	const [user, setUser] = useState([]);
    const [changeobj,setchangeobj]=useState({
		name:"",
		email:"",
		password:"",
		role:""
	})
	const getdata = async () => {
		let res = await fetch("http://localhost:3000/users");
		const data = await res.json();
		// console.log(data);
		setUser(data);
	};
	useEffect(() => {
		getdata();
	}, []);

	const deleteit = async (key) => {
		let res = await fetch(`http://localhost:3000/users/${key}`, {
			method: "DELETE",
		});
		setUser(user.filter((el) => el.id !== key));
	};
	const updateit = async (id) => {
		let res = await axios.get(`http://localhost:3000/users/${id}`);
		let data = res.data;
		data.state = "update";
		await axios.put(`http://localhost:3000/users/${id}`, { ...data });

	};
	const changes = (e) => {
       setchangeobj({...changeobj, [e.target.name]: e.target.value})
	}

	const saveit = async(id) => {
        let newobj = {...changeobj,state:"saved"}
		console.log(newobj);
		
		let res = await axios.put(`http://localhost:3000/users/${id}`,{...newobj});
		
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
							{el.state == "saved"? 
							<>
							<td>{el.name}</td>
							<td>{el.email}</td>
							<td>{el.password}</td>
							<td>{el.role}</td>
							<td style={{ cursor: "pointer" }} onClick={() => updateit(el.id)}>
								Update
							</td>
							<td style={{ cursor: "pointer" }} onClick={() => deleteit(el.id)}>
								Delete
							</td>
							</>
							: 
							<>
							<td><input onChange={changes} type="text" name="name" value={changeobj.name } /></td>
							<td><input onChange={changes} type="text" name="email" value={ changeobj.email} /></td>
							<td><input onChange={changes} type="text" name="password" value={changeobj.password} /></td>
							<td><input onChange={changes} type="text" name="role" value={changeobj.role} /></td>
							<td style={{ cursor: "pointer" }} onClick={() => saveit(el.id)}>Confirm</td>
							<td style={{ cursor: "pointer" }} onClick={() => deleteit(el.id)}>Delete</td>
							</>
							}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Userdatabase;
