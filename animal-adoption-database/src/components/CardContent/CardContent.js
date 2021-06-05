import React from "react";
import "./CardContent.css";
import Button from "../SaveButton/SaveButton";

function CardContent(props) {
    const innerHTML = { __html: props.description }
    return (
        <div className="petcard card ">
            <div className="card-image">
                <figure className="image"></figure>
                <img className="petimage" src={props.img} alt="test" />
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        {/* Make the name dynamic */}
                        <p className="title is-4">{props.name}</p>
                        {/* Make the temperatment dynamic */}
                        <p className="subtitle is-6">{props.age}</p>
                        {/* Make the age dynamic */}
                        <p className="subtitle is-6">@{props.breed}</p>
                        {/* Make the location dynamic */}
                        <p className="subtitle is-6">@{props.location}</p>
                        <Button
                            id={props.id}
                            age={props.age}
                        />
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