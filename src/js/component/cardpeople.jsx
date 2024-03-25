import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
// import "../../styles/cardpeople.css";


export const CardPeople = ({people}) => {

	const { store, actions } = useContext(Context)
	console.log(people);

	return (
        <div className="card" style={{width: "18rem"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiNvdbw8vVSnZ0AGw-AyiG85_10C2NRkzjPO9XZ9B3A&s" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="">{people.name}</h5>
          <p className="gender">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Learn more!</a>
        </div>
      </div>
	);
};

CardPeople.protoTypes = {

}