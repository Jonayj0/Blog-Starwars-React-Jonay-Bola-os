import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {

	const { store, actions } = useContext(Context)


	return (
		<div className="Favorites">
            <h1>Favoritos</h1>

		</div>
	)
};
