import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Fetch from "../fetch/Fetch";

const Routing = () => {
    return (
			<>
				<h3>Hello Route</h3>
				<Router>
					<Link to="/abc"> Fetch</Link>
					<Routes>
						<Route path="/abc" element={<Fetch />} />
					</Routes>
				</Router>
			</>
		);
}
export default Routing