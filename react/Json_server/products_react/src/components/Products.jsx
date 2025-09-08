import React, { useState } from 'react'

const Products = () => {

    const [product_data,setproduct_data]=useState([])
    const handle_change=(e)=>{
        setproduct_data({...product_data, [e.target.name]:e.target.value })
    }
    const handle_submit=()=>{
        // setproduct_data([...product_data, {}:{} ])
        event.preventDefault()
        console.log(product_data);
        
        
    }
  return (
		<div>
			<form onSubmit={handle_submit}>
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
	);
}

export default Products
