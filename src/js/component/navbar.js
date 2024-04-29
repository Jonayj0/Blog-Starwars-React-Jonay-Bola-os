import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	let token = localStorage.getItem("token")

	console.log(store.favorites);

	return (
		<nav className="navbar navbar-light bg-light mb-3 py-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img className="logostarwars" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="" /></span>
			</Link>
			<div className="favorites ml-auto">
				{token ?
					<div className="btn-group me-2">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites<span className="badge bg-secondary mx-1">{store.favorites[0]?.length + store.favorites[1]?.length + store.favorites[2]?.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.length === 0 ?
								<li className="text-center">(empty)</li>
								: store.favorites.map((item, index) => {
									console.log(item);
									return (
										item.map((elemento, index) => {
											console.log(elemento);
											return (
												<li key={index}>
													<a className="dropdown-item text-center" href="#">{elemento.characters_id || elemento.planets_id || elemento.vehicles_id} <i className="fa-solid fa-trash" onClick={() => actions.deleteFavorite(item)}></i></a>
												</li>)
										})
									)
								})}

						</ul>
					</div>
					: <Link to="/login">
						<button type="button" className="btn btn-success">Login</button>
					</Link>}


			</div>
		</nav>
	);
};
