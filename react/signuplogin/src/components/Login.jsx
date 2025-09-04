import React ,{useState} from 'react'
import "../../src/App.css"
const login = () => {
    const arr = JSON.parse(localStorage.getItem("signup_data")) || []
    const [gmail,setgmail]=useState("")
    const [pass,setpass]=useState("")
    const checkit = () => {
      event.preventDefault()
        arr.map((el)=>{
          if(gmail == el.gmail){
            if(pass == el.pass){
              console.log("You are authorized");
              alert("You are authorized");
            }else{
              console.log("Your password is incorrect");
            }
          }else{
            console.log("Your gmail is incorrect");
            
          }
        })
    }
  return (
		<div>
			<form onSubmit={checkit} id="form">
				<label>G-mail</label>
				<br />
				<br />
				<input type="gmail" onChange={(el) => setgmail(el.target.value)} />
				<br />
				<br />
				<label>Password</label>
				<br />
				<input type="number" onChange={(el) => setpass(el.target.value)} />
				<br />
				<br />
				<input id="submit" type="submit" value={"Login"} />
			</form>
		</div>
	);
}

export default login
