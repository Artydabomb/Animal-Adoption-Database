import React, { PureComponent } from "react";
import CardContent from "../CardContent/CardContent";
import "./SavedSearches.css";
import Pup from "../../Pup.json";


function SavedSearches(prop) {
    console.log(Pup);
    return (
        <div className="tile is-ancestor parentTile">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns">
                        {Pup.map((dog, index) => (
                            index < 3 ?
                                < div className="column">
                                    <CardContent
                                        name={dog.data["242"].animalName}
                                        age={dog.data["242"].animalAgeString}
                                    />
                                </div> : <>
                                </>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SavedSearches