import React, { PureComponent, useContext } from "react";
import CardContent from "../CardContent/CardContent";
import "./BodyNoLogin.css";
import Pup from "../../Pup.json";
import SearchContext from "../../utils/SearchContext"

function BodyNoLogin(props) {
    const { searchResults } = useContext(SearchContext);
    console.log(searchResults)
    return (
        <div className="tile is-ancestor parentTile">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns is-multiline">
                        {searchResults.map(animal => (
                            <div className="column is-one-quarter">
                                <CardContent 
                                    name={animal.animalName}
                                    age={animal.animalAgeString}
                                    breed={animal.animalBreed}
                                    location={animal.animalLocationCitystate}
                                    img={animal.animalThumbnailUrl}
                                    description={animal.animalDescription.replace("<div class=\"rgDescription\">", "").replace("</div>", "")}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default BodyNoLogin