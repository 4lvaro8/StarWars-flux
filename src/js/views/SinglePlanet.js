import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const SinglePlanet = (props) => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const planets = store.planets
    const planetImages = store.planetImages
    return (
        <div className="container-fluid">
            <div className="row my-3">
                <h2>Planets<span className="text-black"> / {planets[id]?.name}</span></h2>
            </div>
            <div className="row bg-secondary m-5 border border-light single-card">
                <div className="row">
                    <div className="col-4 p-0  d-flex ">
                        <img className="img-fluid img-cover single-image" src={planetImages[id]} />
                    </div>
                    <div className="col-8 p-4">
                        <h1 className="single-header">{planets[id]?.name}</h1>
                        <p className="single-info-text mt-3 mb-0"><b>Population:</b>{planets[id]?.population}</p>
                        <p className="single-info-text my-0"><b>Diameter:</b>{(planets[id]?.diameter)}km</p>
                        <p className="single-info-text my-0"><b>Climate:</b>{planets[id]?.climate}</p>
                        <p className="single-info-text my-0"><b>Terrain:</b>{planets[id]?.terrain}</p>
                        <p className="single-info-text my-0"><b>Gravity:</b>{planets[id]?.gravity}</p>
                        <p className="single-info-text my-0"><b>Description:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>
                <Link to={"/ "} className="btn btn-warning w-25 mx-auto">Go Back</Link>
            </div>
        </div>
    )
}