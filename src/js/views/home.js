import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

import { CardPeople } from "../component/cardpeople.jsx";
import { CardPlanet } from "../component/cardplanet.jsx";
import { CardVehicles } from "../component/cardvehicles.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getPeople(),
		actions.getPlanets(),
		actions.getVehicles(),
		actions.getPeopleProperties()
	}, [])

	// console.log(store.peoples);
	// console.log(store.planets);
	// console.log(store.vehicles);
	console.log(store.properties);

	return (
		<>
			<h1 className="text-danger ms-5">Characters</h1>
			<div className="d-flex mx-4" style={{overflowX: "scroll"}}>
				{store.peoples.map((people) => {
					return (
						<div className="text m-3" key={people.uid}>

							<CardPeople people={people}
								name={people.name}

							/>

						</div>
					);
				})}
			</div>

			<h1 className="text-danger mt-3 ms-5">Planets</h1>
			<div className="d-flex mx-4" style={{overflowX: "scroll"}}>
				{store.planets.map((planet) => {
					return (
						<div className="text m-3" key={planet.uid}>

							<CardPlanet planets={planet}
								name={planet.name}

							/>

						</div>
					);
				})}
			</div>

			<h1 className="text-danger mt-3 ms-5">Vehicles</h1>
			<div className="d-flex mx-4" style={{overflowX: "scroll"}}>
				{store.vehicles.map((vehicle) => {
					return (
						<div className="text m-3" key={vehicle.uid}>

							<CardVehicles vehicles={vehicle}
								name={vehicle.name}

							/>

						</div>
					);
				})}
			</div>

		</>
	)
};
