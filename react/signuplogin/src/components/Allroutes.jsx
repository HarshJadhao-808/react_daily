import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Signup from './signup'
import Hweb from './Hweb'
import Login from './login'
import Admin from './Admin/admin'
import Productdatabase from './Admin/Productdatabase'
import Userdatabase from './Admin/Userdatabase'
const Allroutes = () => {
  return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Hweb />} />
					<Route path="/Admin" element={<Admin />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/productdatabase" element={<Productdatabase/>} />
					<Route path="/userdatabase" element={<Userdatabase/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default Allroutes
