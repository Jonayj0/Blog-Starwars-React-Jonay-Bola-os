import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

import { LoginForm } from "../component/loginform.jsx";

export const Login = () => {

	const { store, actions } = useContext(Context)


	return (
		<div className="Login">
            <LoginForm />
			{/* <h2 className="tittles text-danger ms-5">Characters</h2>
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
			</div> */}

		</div>
	)
};
