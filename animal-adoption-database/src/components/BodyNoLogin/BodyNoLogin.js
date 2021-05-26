import React, { PureComponent } from "react";
import CardContent from "../CardContent/CardContent";
import "./BodyNoLogin.css";
import Pup from "../../Pup.json";


function BodyNoLogin(prop) {
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
                            index >= 9 && index < 13 ?
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

export default BodyNoLogin