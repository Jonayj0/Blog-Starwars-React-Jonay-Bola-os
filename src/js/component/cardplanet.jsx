import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const CardPlanet = ({ planets }) => {

  const { store, actions } = useContext(Context)
  // console.log(planets);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiNvdbw8vVSnZ0AGw-AyiG85_10C2NRkzjPO9XZ9B3A&s" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text">{planets.name}</h5>
        <p className="card-text">Population: </p>
        <p className="card-text">Terrain: </p>
        <Link to={"/detalles/" + planets.uid}>
          <button href="#" className="btn btn-outline-primary me-5">Learn more!</button>
        </Link>
        <a href="#" className="btn btn-outline-warning ms-5"><i className="fa-regular fa-heart"></i></a>
      </div>
    </div>
  );
};