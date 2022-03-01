import React, { useState } from "react";
import "./CardContent.css";
import Button from "../SaveButton/SaveButton";

function CardContent(props) {
    const innerHTML = { __html: props.description.replace(/â/g, "'")}

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
                    <div className="modal-card main" style={{"maxHeight": "93%", "minWidth": "50%"}}>
                        <header className="modal-card-head mt-3 mx-3">
                            <p className="modal-card-title has-text-centered mt-2">{props.name}</p>
                            <button onClick={disableModal} className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body mx-3 mb-3">
                            <div className="has-text-centered mb-4">
                                <img src={props.highresimg} alt={props.name} style={{"borderRadius": "25px", "border": "2px solid", "borderColor": "#5aa7a7"}}/>
                            </div>
                            <div className="subtitle m-5" dangerouslySetInnerHTML={innerHTML}></div>
                        </section>
                        <footer className="modal-footer"></footer>
                    </div>
                    </div>
                <div className="card-image">
                    <img onClick={enableModal} className="petimage" src={props.highresimg} alt={props.name} />
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p onClick={enableModal} className="title is-4 has-text-centered pb-3">{props.name}</p>
                            <p className="subtitle is-6">{props.rescue}</p>
                            <div className="divider is-danger">about</div>
                            {props.generalAge ? <div className="mb-4 subtitle">• {props.generalAge}</div>:<div></div>} 
                            {props.breed ? <div className="mb-4 subtitle">• {props.breed}</div>:<div></div>}
                            {props.location ? <div className="mb-4 subtitle">• {props.location}</div>:<div></div>}
                            {props.loggedIn ? (
                                <Button animalInfo={animalInfo} isSavedAnimalsList={props.isSavedAnimalsList} removeAnimal={props.removeAnimal} animal={props.animal} />
                            ) :
                                (<div></div>)
                            }
                        </div>
                    </div>
                    <div className="has-text-centered buttonContainer">
                        <button className="button infobutton" onClick={enableModal}>More Info</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardContent