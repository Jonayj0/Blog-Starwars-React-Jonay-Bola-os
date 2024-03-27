import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";
import "../../styles/detalles.css";
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
            <div className="jumbotron mx-5">
                <div className="tittle-top d-flex">
                <img src="https://productroulette.com/_nuxt/img/blog1.d1e9eb0.jpg" className="img-left" alt="..." />
                <h1 className="display-5">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                </div>
            <div>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            </div>
            {/* <div className="detalles container d-flex justify-content-center">
        <img src="https://productroulette.com/_nuxt/img/blog1.d1e9eb0.jpg" className="img-left" alt="..."/>
        <h1 className="tittle">Nombre Personaje</h1>
        </div> */}
        </>
    )

};