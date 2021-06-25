import React from "react";
import "./LargeCard.css"

function LargeCard(props) {

    return (
        <div className="backgroundBox">
            <div className="box m-3">
                <div className="columns">
                    <div className="column is-one-third mt-5">
                        <img src={props.image}></img>
                    </div>
                    <div className="column is-two-thirds">
                        <h1 className="title is-1 has-text-centered mt-2">{props.name}</h1>
                        <p className="subtitle is-3 p-5">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LargeCard