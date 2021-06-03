import React, { PureComponent } from "react";
import CardContent from "../CardContent/CardContent";
import "./BodyLoggedIn.css";
import Pup from "../../Pup.json";


function BodyLoggedIn(prop) {
    console.log(Pup);
    return (
        <div className="tile is-ancestor parentTile">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns">
                        {Pup.map((dog, index) => (
                            index < 4 ?
                                < div className="column">
                                    <CardContent
                                        name={dog.data["242"].animalName}
                                        age={dog.data["242"].animalAgeString}
                                        breed={dog.data["242"].animalBreed}
                                        location={dog.data["242"].animalLocationCitystate} />
                                </div> : <>
                                </>
                        ))}

                    </div>
                    <div className="columns">
                        {Pup.map((dog, index) => (
                            index >= 4 && index < 8 ?
                                < div className="column">
                                    <CardContent
                                        name={dog.data["242"].animalName}
                                        age={dog.data["242"].animalAgeString}
                                        breed={dog.data["242"].animalBreed}
                                        location={dog.data["242"].animalLocationCitystate} />
                                </div> : <>
                                </>
                        ))}
                    </div>
                    <div className="columns">
                        {Pup.map((dog, index) => (
                            index >= 8 && index < 12 ?
                                < div className="column">
                                    <CardContent
                                        name={dog.data["242"].animalName}
                                        age={dog.data["242"].animalAgeString}
                                        breed={dog.data["242"].animalBreed}
                                        location={dog.data["242"].animalLocationCitystate} />
                                </div> : <>
                                </>
                        ))}

                    </div>
                </div>
            </div>
        </div >
    );
}

export default BodyLoggedIn