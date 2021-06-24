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
        if (props.isSavedAnimalsList) {
            props.removeAnimal(props.animal)
        }
    }

    return (
        <div className="has-text-centered">
            {props.isSavedAnimalsList ? 
            <div></div>
            :
            <><h1>{saved}</h1><button className="button is-danger is-light m-1" onClick={saveAnimal}>💖</button></>
            }
                <button className="button border is-info is-light m-1" onClick={unsaveAnimal}>💔</button>
        </div>
    );
}

export default Button;