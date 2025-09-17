import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const Userdatabase = () => {
	const [user, setuser] = useState([]);
	const getdata = async () => {
		let data = await axios.get("http://localhost:3000/users");
		setuser(data.data);
	};
	// console.log(user);
	useEffect(() => {
		getdata();
	}, []);
	
	const handlechange=(e,id)=>{
		const {name , value}= e.target
		console.log(name);
		console.log(value);
		setuser(user.map((el)=> el.id === id ? {...el, [name] : value} : el) )	
		
	}
	const updateit = async(id) => {
		setuser((user.map((el)=>el.id == id ? { ...el, state: "update" } : el)));
	//    getdata()


	
	}
	
	const confirmit = async (id) => {
		let new_obj=user.find((el)=> el.id == id)
		setuser(user.map((el)=>el.id == id ? {...el,state : "saved"}:el)); 
		await axios.put(`http://localhost:3000/users/${id}`,{...new_obj,state : "saved"});
		Swal.fire({
			text: "changes saved !",
			icon: "success",
		});
		getdata()

	};
	const deleteit = async(id) => {
		await axios.delete(`http://localhost:3000/users/${id}`);
		getdata()
	};

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
							{el.state == "saved" ? 
							<>
							<td>{el.name}</td>
							<td>{el.email}</td>
							<td>{el.password}</td>
							<td>{el.role}</td>
							<td style={{cursor:"pointer"}} onClick={()=> updateit(el.id)}>Update</td>
							<td style={{cursor:"pointer"}} onClick={()=> deleteit(el.id)}>Delete</td>
							</>
				        :
						<>
						<td><input className="tdinputs" onChange={(e)=>handlechange(e,el.id)} name="name" value={el.name} type="text"  /></td>
						<td><input className="tdinputs" onChange={(e)=>handlechange(e,el.id)} name="email" value={el.email} type="text"  /></td>
						<td><input className="tdinputs" onChange={(e)=>handlechange(e,el.id)} name="password" value={el.password} type="text"  /></td>
						<td><input className="tdinputs" onChange={(e)=>handlechange(e,el.id)} name="role" value={el.role} type="text"  /></td>
						<td style={{cursor:"pointer"}} onClick={()=> confirmit(el.id)}>Confirm</td>
						<td style={{cursor:"pointer"}} onClick={()=> deleteit(el.id)}>Delete</td>
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
