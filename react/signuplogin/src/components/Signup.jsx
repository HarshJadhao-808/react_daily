import React, { useState } from 'react'

const signup = () => {
  const [arr,setarr]=useState( JSON.parse(localStorage.getItem("signup_data")) || [])
  const [name,setname]=useState("")
  const [gmail,setgmail]=useState("")
  const [pass,setpass]=useState("")
  const sendit = () => {
    event.preventDefault()
    const info ={
	  key:Math.floor(Math.random() *1000),
      name,
      gmail,
      pass,
	  authorized:"No"
    }
    let updated=[...arr,info]
    
    setarr(updated)
    localStorage.setItem("signup_data",JSON.stringify(updated))
    alert("Signup successfull")

  }
  return (
		<div id="main">
			<form onSubmit={sendit} id="form">
				<label>Username</label>
				<br />
				<input type="text" onChange={(el) => setname(el.target.value)} />
				<br />
				<br />
				<label>G-mail</label>
				<br />
				<input type="gmail" onChange={(el) => setgmail(el.target.value)} />
				<br />
				<br />
				<label>Password</label>
				<br />
				<input type="number" onChange={(el) => setpass(el.target.value)} />
				<br />
				<br />
				<input id="submit" type="submit" value={"Signin"} />
			</form>
		</div>
	);
}

export default signup
