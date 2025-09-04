import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import Hweb from './Hweb'
const Allroutes = () => {
  return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Hweb/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/signup" element={<Signup/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default Allroutes
