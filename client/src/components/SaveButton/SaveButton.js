import React from "react";
import { useState } from "react";
import api from "../../utils/API"

function Button(props) {
    const [saved, setSaved] = useState('Unsaved');
    // disabled state refers to whether the save button should be disabled or not.
    const [disabled, setDisabled] = useState(false);

    function saveAnimal() {
        setSaved('Saved!')
        api.postAnimal(props.animalInfo)
        setDisabled(true)
    }

    function unsaveAnimal() {
        setSaved('Unsaved')
        api.deleteAnimal(props.animalInfo)
        if (props.isSavedAnimalsList) {
            props.removeAnimal(props.animal)
        }
        setDisabled(false)
    }

    return (
        <div className="has-text-centered">
            {props.isSavedAnimalsList ? 
            <div></div>
            :
            <><h1 className="subtitle mb-1 is-5">{saved}</h1><button className="button is-danger is-light m-1" disabled={disabled} onClick={saveAnimal}>💖</button></>
            }
                <button className="button border is-info is-light m-1" disabled={props.isSavedAnimalsList ? false : !disabled} onClick={unsaveAnimal}>💔</button>
        </div>
    );
}

export default Button;