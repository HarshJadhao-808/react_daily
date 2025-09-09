import React, { useState, useEffect } from "react";

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
					</tr>
				</thead>
				<tbody>
					{user.map((el) => (
						<tr key={el.id}>
							<td>{el.name}</td>
							<td>{el.email}</td>
							<td>{el.password}</td>
							<td>{el.role}</td>
							<td onClick={() => deleteit(el.id)}>Delete</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Userdatabase;
