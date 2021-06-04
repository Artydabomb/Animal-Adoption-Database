import React from "react";
import "./CardContent.css";
import Button from "../SaveButton/SaveButton";

function CardContent(props) {
    const innerHTML = { __html: props.description }
    return (
        <div className="petcard card">
            <div className="card-image">
                <figure className="image"></figure>
                <img className="petimage" src={props.highresimg} alt={props.name} />
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4 has-text-centered">{props.name}</p>
                        <div className="divider is-danger">about</div>
                        <p className="subtitle is-6">- {props.age} old</p>
                        <p className="subtitle is-6">- {props.breed}</p>
                        <p className="subtitle is-6">- {props.location}</p>
                        <Button />
                    </div>
                </div>

                <div className="content">
                    <div dangerouslySetInnerHTML={innerHTML} />
                </div>
            </div>
        </div>
    )
}
export default CardContent