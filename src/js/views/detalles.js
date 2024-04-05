import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";
import "../../styles/detalles.css";
import { Link } from "react-router-dom";
import "../../styles/detalles.css";


export const Detalles = () => {

    const params = useParams()
    console.log(params);

    const { store, actions } = useContext(Context)

    const type = params.type === "people" ? "characters" :
                     params.type === "planets" ? "planets" :
                     params.type === "vehicles" ? "vehicles" : "";


    useEffect(() => {
        actions.getInfo(params.type, params.uid)
        // actions.getPeople(),
        // actions.getPlanets(),
        // actions.getVehicles()
    }, [])

    console.log(store.info);

    // const info = store.properties

    return (
        <>
            <div className="jumbotron">
                <div className="tittle-top d-flex justify-content-evenly">
                    <img src={/**type == type.planets && planets.uid == 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" :*/ `https://starwars-visualguide.com/assets/img/${type}/${params.uid}.jpg`} className="img-left" alt="image" />
                    <div className="detalles-personaje d-block justify-content-center text-center">
                        <h1 className="titulo-nombre">{store.info?.properties?.name}</h1>
                        <p className="description">{store.info?.description}</p>
                    </div>
                </div>
                <div className="tittle-bottom">
                    <div className="d-flex justify-content-around text-center text-danger mt-4">
                        <div className="name-body d-block">
                            <h5 className="name-title">Name</h5>
                            <p className="name-text">{store.info?.properties?.name}</p>
                        </div>
                        <div className="birth-body d-block">
                            <h5 className="birth-title">{params.type === "people" ? "Birth year" :
                                                        params.type === "planets" ? "Climate" :
                                                        params.type === "vehicles" ? "Crew" : ""}</h5>
                            <p className="birth-text">{
                                        params.type == "people" ? store.info?.properties?.birth_year :
                                        params.type == "planets" ? store.info?.properties?.climate :
                                        params.type == "vehicles" ? store.info?.properties?.crew : ""}</p>
                        </div>
                        <div className="gender-body d-block">
                            <h5 className="gender-title">Gender</h5>
                            <p className="gender-text">{store.info?.properties?.gender}</p>
                        </div>
                        <div className="height-body d-block">
                            <h5 className="height-title">Height</h5>
                            <p className="height-text">{store.info?.properties?.height}</p>
                        </div>
                        <div className="skin-body d-block">
                            <h5 className="skin-title">Skin<br />Color</h5>
                            <p className="skin-text">{store.info?.properties?.skin_color}</p>
                        </div>
                        <div className="eye-body d-block">
                            <h5 className="eye-title">Eye<br />Color</h5>
                            <p className="eye-text">{store.info?.properties?.eye_color}</p>
                        </div>

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