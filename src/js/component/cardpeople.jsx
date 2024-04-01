import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
// import "../../styles/cardpeople.css";
import { Detalles } from "../views/detalles.js";


export const CardPeople = ({ people }) => {

  const { store, actions } = useContext(Context)
  // console.log(people);

  function addFavorites() {
    actions.addFavorite()
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiNvdbw8vVSnZ0AGw-AyiG85_10C2NRkzjPO9XZ9B3A&s" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text">{people.name}</h5>
        <p className="card-text">Gender: </p>
        <p className="card-text">Hair color: </p>
        <p className="card-text">Eye color: </p>
        <Link to={"/detalles/" + people.uid}>
          <button href="#" className="btn btn-outline-primary me-5">Learn more!</button>
        </Link>
        <a href="#" className="btn btn-outline-warning ms-5" onClick={{addFavorites}}><i className="fa-regular fa-heart"></i></a>
      </div>
    </div>
  );
};