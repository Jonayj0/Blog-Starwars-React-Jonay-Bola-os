import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";



export const CardPeople = ({ people }) => {

  const { store, actions } = useContext(Context)

  const addHeart = store.favorites.includes(people.name)

  function addFavorites() {
    // actions.addFavorite(people.name)
    actions.favoriteList(people.name)
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text">{people.name}</h5>
        <p className="card-text">Gender: </p>
        <p className="card-text">Hair color: </p>
        <p className="card-text">Eye color: </p>
        <Link to={"/detalles/people/" + people.uid}>
          <button href="#" className="btn btn-outline-primary me-5">Learn more!</button>
        </Link>
        <a href="#" className="btn btn-outline-warning ms-5" onClick={addFavorites}><i className={`fa- regular fa-heart ${addHeart ? "fas" : "far"}`}></i></a>
      </div>
    </div>
  );
};