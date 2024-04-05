import React, { useContext} from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {

	const { store, actions } = useContext(Context)


	return (
		<nav className="navbar navbar-light bg-light mb-3 py-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img className="logostarwars" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt=""/></span>
			</Link>
			<div className="favorites ml-auto">
					<div className="btn-group me-5">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites<span className="badge bg-secondary mx-1">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((item, index) => { return (
							<li key={index}>
								<a className="dropdown-item" href="#">{item} <i className="fa-solid fa-trash" onClick={() => actions.deleteFavorite(item)}></i></a>
								</li>)})}

						</ul>
					</div>
			</div>
		</nav>
	);
};
