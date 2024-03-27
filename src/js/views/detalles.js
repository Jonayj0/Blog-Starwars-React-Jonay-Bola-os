import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";

// import "../../styles/detalles.css";


export const Detalles = () => {

    const params = useParams()
    console.log(params);
    const { store, actions } = useContext(Context)

    useEffect(() => {
        // actions.getPeople(),
        // actions.getPlanets(),
        // actions.getVehicles()
    }, [])

    return (
        <>
        <h1>Detalles</h1>
        </>
    )

};