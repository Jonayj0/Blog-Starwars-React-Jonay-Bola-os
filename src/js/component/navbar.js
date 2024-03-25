import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><h1><i className="fa-brands fa-old-republic ms-5"></i></h1></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					{/* <button className="btn btn-primary me-5">Favorites</button>
					<!-- Example single danger button --> */}
					<div className="btn-group me-5">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							<li><hr className="dropdown-divider" /></li>
							<li><a className="dropdown-item" href="#">Separated link</a></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
