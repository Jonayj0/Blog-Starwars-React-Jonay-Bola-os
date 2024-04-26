import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/cardpeople.jsx";
import { CardPlanets } from "../component/cardplanets.jsx";
import { CardVehicles } from "../component/cardvehicles.jsx";
import "../../styles/favorites.css";


export const Favorites = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getFavorites(),
		// actions.getInfo(),
		actions.favoriteList()
	}, [])

	return (
		<div className="favorites">
			<h1 className="tittle-user text-center text-warning bg-secondary">FAVORITOS</h1>
			<h2 className="tittles text-danger ms-5">Characters</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.peoples.map((people) => {
					return (
						<div className="text m-3" key={people.uid}>

							<CardPeople people={people}
								// type={people}
								name={people.name}

							/>

						</div>
					);
				})}
			</div>

			<h2 className="tittles text-danger mt-3 ms-5">Planets</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.planets.map((planet) => {
					return (
						<div className="text m-3" key={planet.uid}>

							<CardPlanets planets={planet}
								// type={planet}
								name={planet.name}

							/>

						</div>
					);
				})}
			</div>

			<h2 className="tittles text-danger mt-3 ms-5">Vehicles</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.vehicles.map((vehicle) => {
					return (
						<div className="text m-3" key={vehicle.uid}>

							<CardVehicles vehicles={vehicle}
								// type={vehicle}
								name={vehicle.name}

							/>

						</div>
					);
				})}
			</div>

		</div>
	)
};

