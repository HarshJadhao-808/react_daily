import React, { useEffect, useState } from 'react'


const Hweb = () => {
	const [data,setdata]=useState([])
	const getdeta= async()  => {
		let res = await fetch("http://localhost:3000/products");
		let x = await res.json()
		setdata(x)
	}
	useEffect(()=>{
		getdeta()
	},[])
  return (
		<div>
			<div className='main_parent'>
				{data.map((el)=>(
					<div key={el.id} className='main_div'>
				<img src={el.url} alt="" />
				<h1>{el.name}</h1>
				<h1>{el.price}</h1>
					</div>
				
				))}
			</div>
		</div>
	);
}

export default Hweb
