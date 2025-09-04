import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
		<nav>
			<ul>
                <li><Link  to="/"><img id='logo' src="../../src/assets/Hweb.png" alt="" /></Link></li>
			</ul>
			<ul id='pages'>
				<li><Link className='link' to="/signup">Signup</Link></li>
				<li><Link className='link' to="/login">Login</Link></li>
			</ul>
		</nav>
	);
}

export default Navbar
