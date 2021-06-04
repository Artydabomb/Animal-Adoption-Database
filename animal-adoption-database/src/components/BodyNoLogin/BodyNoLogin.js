import React, { PureComponent, useContext } from "react";
import CardContent from "../CardContent/CardContent";
import "./BodyNoLogin.css";
import Pup from "../../Pup.json";
import SearchContext from "../../utils/SearchContext"

function BodyNoLogin(props) {
    const { searchTerm, searchResults } = useContext(SearchContext);
    return (
        <div className="tile is-ancestor parentTile">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns is-multiline">
                        {searchResults.length ? (<div></div>):(<div className="column">No Results Found</div>)}
                        {searchResults.map(animal => (
                            <div key={animal.animalID} className="column is-one-quarter">
                                <CardContent 
                                    name={animal.animalName}
                                    age={animal.animalAgeString}
                                    breed={animal.animalBreed}
                                    location={animal.animalLocationCitystate}
                                    img={animal.animalThumbnailUrl ? animal.animalThumbnailUrl : "https://image.freepik.com/free-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg"}
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