import React, { useState } from "react";
import "./CardContent.css";
import Button from "../SaveButton/SaveButton";

function CardContent(props) {
    const innerHTML = { __html: props.description }

    function disableModal() {
        document.getElementById(props.id).className="modal"
    }

    function enableModal() {
        document.getElementById(props.id).className="modal is-active"
    }

    let animalInfo = {
        username: props.username,
        id: props.id,
        name: props.name,
        generalAge: props.generalAge,
        breed: props.breed,
        image: props.highresimg,
        location: props.location,
        description: props.description
    }

    return (
        <>
            <div className="petcard card">
                <div className="modal" id={props.id}>
                    <div className="modal-background" onClick={disableModal}></div>
                    <div className="modal-card main" style={{"maxHeight": "93%"}}>
                        <header className="modal-card-head mt-3 mx-3">
                            <p className="modal-card-title has-text-centered mt-2">{props.name}</p>
                            <button onClick={disableModal} className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body mx-3 mb-3">
                            <div className="has-text-centered mb-4">
                                <img src={props.highresimg} alt={props.name} />
                            </div>
                            <div className="subtitle m-3" dangerouslySetInnerHTML={innerHTML}></div>
                        </section>
                    </div>
                    </div>
                <div className="card-image">
                    <img className="petimage" src={props.highresimg} alt={props.name} />
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4 has-text-centered pb-3">{props.name}</p>
                            <p className="subtitle is-6">{props.rescue}</p>
                            <div className="divider is-danger">about</div>
                            {props.generalAge ? <li className="subtitle is-6">{props.generalAge}</li>:<div></div>} 
                            {props.breed ? <li className="subtitle is-6">{props.breed}</li>:<div></div>}
                            {props.location ? <li className="subtitle is-6">{props.location}</li>:<div></div>}
                            {props.loggedIn ? (
                                <Button animalInfo={animalInfo} isSavedAnimalsList={props.isSavedAnimalsList} removeAnimal={props.removeAnimal} animal={props.animal} />
                            ) :
                                (<div></div>)
                            }
                        </div>
                    </div>
                    <div className="content">
                        <div className="has-text-centered">
                            <button className="button infobutton" onClick={enableModal}>More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardContent