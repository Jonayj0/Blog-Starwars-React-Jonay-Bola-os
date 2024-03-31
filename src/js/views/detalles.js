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
                {/* {store.properties.map((item) => {
                return (
                <li key={item.uid}><Link to={"detalles/"+item.uid}></Link>{properties.name}</li>);})} */}
                <div className="tittle-top d-flex">
                    <img src="https://productroulette.com/_nuxt/img/blog1.d1e9eb0.jpg" className="img-left" alt="..." />
                    <div className="detalles-personaje d-block text-center">
                        <h1 className="titulo-nombre">LUKE SKYWALKER </h1>
                        {/* {store.properties.map((item) => <li key={item.uid}><Link to={"detalles/"+item.uid}></Link>{properties.name}</li>)} */}
                        <p className="description">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </div>
                </div>
                <div className="tittle-bottom d-flex justify-content-around text-center text-danger mb-3">
                    <div className="name-body d-block">
                        <h5 className="name-title">Name</h5>
                        <p className="name-text">Luke <br />Skywalker</p>
                    </div>
                    <div className="birth-body d-block">
                        <h5 className="birth-title">Birth<br />Year</h5>
                        <p className="birth-text">1987</p>
                    </div>
                    <div className="gender-body d-block">
                        <h5 className="gender-title">Gender</h5>
                        <p className="gender-text">Male</p>
                    </div>  
                    <div className="height-body d-block">
                        <h5 className="height-title">Height</h5>
                        <p className="height-text">172</p>
                    </div>
                    <div className="skin-body d-block">
                        <h5 className="skin-title">Skin<br />Color</h5>
                        <p className="skin-text">fair</p>
                    </div>  
                    <div className="eye-body d-block">
                        <h5 className="eye-title">Eye<br />Color</h5>
                        <p className="eye-text">blue</p>
                    </div> 

                </div>
            </div>
            {/* <div className="detalles container d-flex justify-content-center">
        <img src="https://productroulette.com/_nuxt/img/blog1.d1e9eb0.jpg" className="img-left" alt="..."/>
        <h1 className="tittle">Nombre Personaje</h1>
        </div> */}
        </>
    )

};