import React, { useEffect, useState } from "react";

const Productdatabase = () => {

  const [tabledata, settabledata]=useState([])

  const getdata = async(dta) => {
    let res= await fetch("http://localhost:3000/products");
    let data = await res.json()
    settabledata(data)
	// console.log(tabledata);
  } 




	const [view, setview] = useState("form")
	const [product_data, setproduct_data] = useState({
		name: "",
		price: "",
		url: "",
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
		}, [tabledata]);

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
								</tr>
							</thead>
							<tbody>
							

								{tabledata.map((el)=>(
									
									// console.log(el)
            	 	 <tr key={el.id}>
                		<td>{el.name}</td>
               			 <td>{el.price}</td>
                		 <td>{el.url}</td>
                		<td>Delete</td>
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
