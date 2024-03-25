import React, { useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext.js";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { CardPeople } from "../component/cardpeople.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getPeople()
	}, [])

	console.log(store.peoples);

	return (
	<>
		<h1 className="text-danger">Characters</h1>
			<div>
				{store.peoples.map((people) => {
						return (
							<li key={people.uid}>
								<CardPeople people={people} 
											name={people.name}
											
											/>
							</li>
						)
					})
				}
			</div>
	</>
	)
};
