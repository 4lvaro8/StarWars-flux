import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const SingleShip = (props) => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const ships = store.ships;
    const shipImages = store.shipImages;
    const shipId = parseInt(id);


    useEffect(() => {
        actions.fetchSingleShip(shipId);
    }, [shipId]);

    const ship = ships[shipId];

    return (
        <div className="container-fluid">
            <div className="row text-light my-3">
                <h2>Ships<span className="text-light"> / {ship?.name}</span></h2>
            </div>
            <div className="row bg-warning bg-gradient m-5 border border-light single-card">
                <div className="row">
                    <div className="col-4 p-0 d-flex">
                        <img className="img-fluid img-cover single-image" src={shipImages} alt={ship?.name} />
                    </div>
                    <div className="col-8 p-4">
                        <h1 className="single-header">{ship?.name}</h1>
                        <p className="single-info-text mt-3 mb-0"><b>Manufacturer:</b> {ship?.manufacturer}</p>
                        <p className="single-info-text my-0"><b>Cost:</b> {ship?.cost_in_credits} Cr</p>
                        <p className="single-info-text my-0"><b>Max Atmos. Speed:</b> {ship?.max_atmosphering_speed}</p>
                        <p className="single-info-text my-0"><b>Crew:</b> {ship?.crew}</p>
                        <p className="single-info-text my-0"><b>Passengers:</b> {ship?.passengers}</p>
                        <p className="single-info-text my-0"><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link to="/" className="btn btn-warning w-25">Go Back</Link>
            </div>
        </div>
    );
};
