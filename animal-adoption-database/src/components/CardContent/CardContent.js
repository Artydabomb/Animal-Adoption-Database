import React, {useState} from "react";
import "./CardContent.css";
import Button from "../SaveButton/SaveButton";

function CardContent(props) {
    const [hiddenDescription, setHiddenDescription] = useState({hidden: "is-hidden", button: "More Info"})
    const innerHTML = { __html: props.description }

    function changeStatus() {
        if (hiddenDescription.hidden === "is-hidden") {
            setHiddenDescription({hidden:"", button: "Hide"})
        } else {
            setHiddenDescription({hidden:"is-hidden", button: "More Info"})
        }
    }

    return (
        <div className="petcard card">
            <div className="card-image">
                <img className="petimage" src={props.highresimg} alt={props.name}/>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4 has-text-centered pb-3">{props.name}</p>
                        <p className="subtitle is-6">{props.rescue}</p>
                        <div className="divider is-danger">about</div>
                        <p className="subtitle is-6">- {props.age} old</p>
                        <p className="subtitle is-6">- {props.breed}</p>
                        <p className="subtitle is-6">- {props.location}</p>
                        <Button />
                    </div>
                </div>
                <div className="content">
                    <div className="has-text-centered">
                        <button className="button" onClick={changeStatus}>{hiddenDescription.button}</button> 
                    </div>
                    <div className={hiddenDescription.hidden} dangerouslySetInnerHTML={innerHTML} />
                </div>
            </div>
        </div>
    )
}
export default CardContent