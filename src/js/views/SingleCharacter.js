import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const SingleCharacter = (props) => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const characters = store.characters;
    const characterId = parseInt(id);

    useEffect(() => {
        actions.fetchSingleCharacter(characterId);
    }, [characterId]);

    const character = characters[characterId]; 

    return (
        <div className="container-fluid">
            <div className="row text-light my-3">
                <h2>Characters<span className="text-light"> / {character?.name}</span></h2>
            </div>
            <div className="row bg-warning bg-gradient m-5 border border-light single-card">
                <div className="row">
                    <div className="col-4 p-0 d-flex">
                        <img className="img-fluid img-cover single-image" src={`https://starwars-visualguide.com/assets/img/characters/${characterId + 1}.jpg`} alt={character?.name} />
                    </div>
                    <div className="col-8 p-4">
                        <h1 className="single-header">{character?.name}</h1>
                        <p className="single-info-text mt-3 mb-0"><b>Birth Year:</b> {character?.birth_year}</p>
                        <p className="single-info-text my-0"><b>Height:</b> {(character?.height / 100).toFixed(2)}m</p>
                        <p className="single-info-text my-0"><b>Hair Color:</b> {character?.hair_color}</p>
                        <p className="single-info-text my-0"><b>Eye Color:</b> {character?.eye_color}</p>
                        <p className="single-info-text my-0"><b>Skin Color:</b> {character?.skin_color}</p>
                        <p className="single-info-text my-0"><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link to="/" className="btn btn-warning w-25">Go Back</Link>
            </div>
        </div>
    );
}
