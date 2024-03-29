import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";
import "../../styles/detalles.css";
import { Link } from "react-router-dom";
// import "../../styles/detalles.css";


export const Detalles = () => {

    const params = useParams()
    console.log(params.uid);
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPeopleProperties()
        // actions.getPeople(),
        // actions.getPlanets(),
        // actions.getVehicles()
    }, [])

    console.log(store.properties);

    return (
        <>
            <div className="jumbotron mx-5">
                <div className="tittle-top d-flex">
                    <img src="https://productroulette.com/_nuxt/img/blog1.d1e9eb0.jpg" className="img-left" alt="..." />
                    <h1 className="display-5">Hello, world! </h1>
                    {/* {store.properties.map((item) => <li key={item.uid}><Link to={"detalles/"+item.uid}></Link>{properties.name}</li>)} */}
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