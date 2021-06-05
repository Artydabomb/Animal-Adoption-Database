import React, { PureComponent, useContext } from "react";
import CardContent from "../CardContent/CardContent";
import "./BodyNoLogin.css";
import SearchContext from "../../utils/SearchContext"
import HeaderNav from "../Header/HeaderNav";

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
                                    loggedIn={props.loggedIn}
                                    highresimg={animal.animalPictures[0] ? animal.animalPictures[0].large.url : "https://newcastlebeach.org/images/dog-and-cat-cartoon-3.jpg"}
                                    name={animal.animalName}
                                    age={animal.animalAgeString}
                                    breed={animal.animalBreed}
                                    location={animal.animalLocationCitystate}
                                    img={animal.animalThumbnailUrl ? animal.animalThumbnailUrl : "https://newcastlebeach.org/images/dog-and-cat-cartoon-3.jpg"}
                                    description={animal.animalDescription.replace("<div class=\"rgDescription\">", "").replace("</div>", "")}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div>
    );
}

export default BodyNoLogin