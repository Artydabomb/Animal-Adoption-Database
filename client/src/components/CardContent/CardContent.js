import React, { useState } from "react";
import "./CardContent.css";
import Button from "../SaveButton/SaveButton";

function CardContent(props) {
    const [hiddenDescription, setHiddenDescription] = useState({ hidden: "is-hidden", button: "More Info" })
    const innerHTML = { __html: props.description }

    function changeStatus() {
        if (hiddenDescription.hidden === "is-hidden") {
            setHiddenDescription({ hidden: "", button: "Hide" })
        } else {
            setHiddenDescription({ hidden: "is-hidden", button: "More Info" })
        }
    }

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
        age: props.age,
        breed: props.breed,
        image: props.highresimg,
        location: props.location,
        description: props.description
    }

    return (
        <>
            <div className="petcard card">
                <div className="modal" id={props.id}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title has-text-centered mt-2">{props.name}</p>
                            <button onClick={disableModal} className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="has-text-centered mb-4">
                                <img src={props.highresimg} alt={props.name} />
                            </div>
                            <div className="subtitle m-3" dangerouslySetInnerHTML={innerHTML}></div>
                        </section>
                        <footer className="modal-card-foot">
                        </footer>
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
                            {props.age ? <li className="subtitle is-6">{props.age} old</li>:<div></div>} 
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
                            <button className="button infobutton" onClick={enableModal}>{hiddenDescription.button}</button>
                        </div>
                        <div className={hiddenDescription.hidden} dangerouslySetInnerHTML={innerHTML} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardContent