import React from "react";
import { useState } from "react";
import api from "../../utils/API"

function Button(props) {
    const [saved, setSaved] = useState('Unsaved');

    function saveAnimal() {
        setSaved('Saved')
        api.postAnimal(props.animalInfo)
    }

    function unsaveAnimal() {
        setSaved('Unsaved.')
        api.deleteAnimal(props.animalInfo)
    }

    return (
        <div className="has-text-centered">
            <h1>{saved}</h1>
            <button className="button is-info is-light m-1" onClick={saveAnimal}>💖</button>
            <button className="button border is-danger is-light m-1" onClick={unsaveAnimal}>💔</button>
        </div>
    );
}

export default Button;