import React from "react";
import "./CardContent.css";

function CardContent(props) {
    return (
        <div className="petcard card ">
            <div className="card-image">
                <figure className="image"></figure>
                <img className="petimage" src="https://bulma.io/images/placeholders/128x128.png" alt="test" />
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

                    </div>
                </div>

                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    <a href="test">#css</a> <a href="test">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    )
}
export default CardContent