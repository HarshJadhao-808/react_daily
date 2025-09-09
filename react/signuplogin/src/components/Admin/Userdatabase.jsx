import React, { useState, useEffect } from "react";

const Userdatabase = () => {
	const [user, setUser] = useState([]);

	const getdata = async () => {
		let res = await fetch("http://localhost:3000/users");
		const data = await res.json();
		// console.log(data);
		setUser(data);
	};
	getdata();

    const deleteit = (key) => {
        let updated = user.filter((el)=> el.id !== key )
        setUser(updated)
        const Sendupdate = async() => {
            let res = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updated),
            });
        }
        Sendupdate()
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
