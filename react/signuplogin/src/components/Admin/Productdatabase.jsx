import React, { useEffect, useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2";

const Productdatabase = () => {
	const [tabledata, settabledata] = useState([]);

	const getdata = async (dta) => {
		let res = await fetch("http://localhost:3000/products");
		let data = await res.json();
		settabledata(data);
		// console.log(tabledata);
	};

	const [view, setview] = useState("form");
	const [product_data, setproduct_data] = useState({
		name: "",
		price: "",
		url: "",
		state:"saved"
	});
	const handle_change = (e) => {
		setproduct_data({ ...product_data, [e.target.name]: e.target.value });
	};
	const handle_submit = async () => {
		event.preventDefault();
		console.log(product_data);
		let res = await fetch("http://localhost:3000/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(product_data),
		});
		setproduct_data({ name: "", price: "", url: "" });
	};

	useEffect(() => {
		getdata();
	}, []);



	// here code is for crud update and delete operations

	const deleteit = async(id) => {
		await axios.delete(`http://localhost:3000/products/${id}`);
		getdata()
	}

	const updatechange = (e,id)=> {
		const {name , value} = e.target
		console.log(name)
		console.log(value)
		settabledata(tabledata.map((el)=> el.id === id ? {...el,[name] : value } : el))
		// getdata()
	}
	
	const Updateit = (id) => {
		settabledata(tabledata.map((el)=>el.id === id ?{...el,state : "update"}:el))
	}
	
	const saveit = async(id) => {
		
		let data = tabledata.find((el)=> el.id == id)
		settabledata(tabledata.map((el)=>el.id === id ?{...el,state : "saved"}:el))
		await axios.put(`http://localhost:3000/products/${id}`,{...data,state : "saved"});
		Swal.fire({
					text: "changes saved !",
					icon: "success",
				});
		getdata()

	}
	
	return (
		<div id="whole_page">
			<div id="switch">
				<div
					className="switchbuttons"
					onClick={() => setview("form")}
					style={
						view == "form"
							? {
									background: "linear-gradient(135deg, #6366f1, #4338ca)",
									color: "white",
							  }
							: {}
					}
				>
					Add Products
				</div>
				<div
					className="switchbuttons"
					onClick={() => setview("table")}
					style={
						view == "table"
							? {
									background: "linear-gradient(135deg, #6366f1, #4338ca)",
									color: "white",
							  }
							: {}
					}
				>
					Update Products
				</div>
			</div>
			{view == "form" ? (
				<div id="product_div">
					<form id="products_form" onSubmit={handle_submit}>
						<input
							type="text"
							placeholder="Enter your product name"
							name="name"
							onChange={handle_change}
							value={product_data.name}
						/>
						<input
							type="number"
							placeholder=" Price in ₹"
							name="price"
							onChange={handle_change}
							value={product_data.price}
						/>
						<input
							type="text"
							placeholder=" Enter imgae url"
							name="url"
							onChange={handle_change}
							value={product_data.url}
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
			) : (
				<div>
					<div>
						<table id="userdatabasetable">
							<thead>
								<tr>
									<th>Name</th>
									<th>Price</th>
									<th>URL</th>
									<th>Update</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
								{tabledata.map((el) => (
									// console.log(el)
									<tr key={el.id}>
										{el.state == "saved" ?
									<>
										<td>{el.name}</td>
										<td>{el.price}</td>
										<td>{el.url}</td>
										<td style={{cursor:"pointer"}} onClick={()=>Updateit(el.id)}>Update</td>
										<td style={{cursor:"pointer"}} onClick={()=>deleteit(el.id)} >Delete</td>
									</>	
										:
									<>
									     <td><input  className="tdinputs" type="text" onChange={(e)=>updatechange(e,el.id)} name="name" value={el.name} /></td>
									     <td><input  className="tdinputs" type="text" onChange={(e)=>updatechange(e,el.id)} name="price" value={el.price} /></td>
									     <td><input  className="tdinputs" type="text" onChange={(e)=>updatechange(e,el.id)} name="url" value={el.url} /></td>
										 <td style={{cursor:"pointer"}} onClick={()=>saveit(el.id)}>Confirm</td>
										 <td style={{cursor:"pointer"}} onClick={()=>deleteit(el.id)} >Delete</td>
									</>
										}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
};

export default Productdatabase;
