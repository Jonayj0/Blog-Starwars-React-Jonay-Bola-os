import React, { useContext} from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	console.log(store.favorites);

	return (
		<nav className="navbar navbar-light bg-light mb-3 py-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img className="logostarwars" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt=""/></span>
			</Link>
			<div className="favorites ml-auto">
				{/* <Link to="/demo"> */}
					{/* <button className="btn btn-primary me-5">Favorites</button>
					<!-- Example single danger button --> */}
					<div className="btn-group me-5">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites<span className="badge bg-secondary mx-1">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((item, index) => { return (
							<li key={index}>
							{/* <Link to={"detalles/"+item.name}> */}
								<a className="dropdown-item" href="#">{item}</a>
								{/* </Link> */}
								<i className="fa-solid fa-trash" onClick={() => actions.deleteFavorite(item)}></i></li>)})}
							{/* <li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							<li><hr className="dropdown-divider" /></li>
							<li><a className="dropdown-item" href="#">Separated link</a></li> */}
						</ul>
					</div>
				{/* </Link> */}
			</div>
		</nav>
	);
};


{/* {store.properties.map((item) => <li key={item.uid}><Link to={"detalles/"+item.uid}></Link>{properties.name}</li>)} */}


{/* <ul className="list-group list-group-flush">
					{tasks.map((task,index) => { return (<li className="list-group-item py-3 ms-3" key={index}> {task.label}   
						<span className="delete" onClick={() => deletetask(index)}><i className="fa-solid fa-xmark"></i></span></li>)
					}
					)}	
			</ul>
				<div className="contador border-top p-3"><span>{tasks.length} tasks</span></div>	
		</div>
		<div>
			<span className="buttonDelete" onClick={() => deleteList()}><button className="btn btn-danger mt-4" type="button">DELETE</button></span>
			</div> */}