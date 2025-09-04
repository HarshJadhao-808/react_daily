import React from 'react'
import {ThemeContext} from './ThemeContext/ThemeContext'
import { useContext } from 'react'
const Navbar = () => {
    const {theme,changetheme}=useContext(ThemeContext)
    
    // console.log(theme);
    
  return (
		<nav style={{
            backgroundColor:theme==="light"?"#fff" : "#000",
            color:theme==="light"?"#000":"#fff"
        }}>
		<h1>Weather Dashboard</h1>
			<button onClick={changetheme}>
				change to {theme === "light" ? "Dark" : "Light"}
			</button>
		</nav>
	);
}

export default Navbar
