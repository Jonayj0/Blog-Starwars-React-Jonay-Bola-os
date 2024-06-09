import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { SignupForm } from "../component/signupform.jsx";

export const Signup = () => {

	const { store, actions } = useContext(Context)


	return (
		<div className="Signup container">
            <SignupForm />
		</div>
	)
};