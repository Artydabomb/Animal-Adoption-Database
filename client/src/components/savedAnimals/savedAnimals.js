import React, { useState, useEffect } from "react";
import "./savedAnimals.css"
import api from "../../utils/API";
import CardContent from "../CardContent/CardContent";

function SavedAnimals(props) {

    const [savedAnimals, setSavedAnimals] = useState([]);

    useEffect(() => {
        api.getSavedAnimals()
        // .then(res=>console.log(JSON.stringify(res.data)))
        .then(res=>setSavedAnimals(res.data))
    }, [])

    return (

        <div className="tile-is-ancestor animals">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns is-multiline">
                        {savedAnimals.length ? 
                        savedAnimals.map(animal => (
                            <div key={animal.animalID} className="column is-one-quarter">
                                <CardContent 
                                    username={props.username}
                                    loggedIn={props.loggedIn}
                                    highresimg={animal.image ? animal.image : "https://newcastlebeach.org/images/dog-and-cat-cartoon-3.jpg"}
                                    name={animal.name}
                                    age={animal.age}
                                    breed={animal.breed}
                                    location={animal.location}
                                    img={animal.animalThumbnailUrl ? animal.animalThumbnailUrl : "https://newcastlebeach.org/images/dog-and-cat-cartoon-3.jpg"}
                                    // description={animal.description.replace("<div class=\"rgDescription\">", "").replace("</div>", "")}
                                    description={animal.description}
                                    id={animal.id}
                                />
                            </div>
                        ))
                        :
                        <div className="container">
                            <div style={{"textAlign": "center"}}>No Saved Animals</div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SavedAnimals