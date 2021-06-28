import React, { PureComponent, useContext } from "react";
import CardContent from "../CardContent/CardContent";
import "./BodyNoLogin.css";
import SearchContext from "../../utils/SearchContext";
import PrevNext from "../PrevNext/PrevNext";

function BodyNoLogin(props) {
    const { searchResults, isSearched } = useContext(SearchContext);

    return (
        <div className="tile is-ancestor main">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns is-multiline">
                        {searchResults.length || !isSearched ? (<div></div>):(<div className="column has-text-centered subtitle mt-3">No results found</div>)}
                        {searchResults.map(animal => (
                            <div key={animal.animalID} className="column is-one-quarter">
                                <CardContent 
                                    username={props.username}
                                    loggedIn={props.loggedIn}
                                    highresimg={animal.animalPictures[0] ? animal.animalPictures[0].large.url : "https://newcastlebeach.org/images/dog-and-cat-cartoon-3.jpg"}
                                    name={animal.animalName}
                                    age={animal.animalAgeString}
                                    breed={animal.animalBreed}
                                    location={animal.animalLocationCitystate}
                                    img={animal.animalThumbnailUrl ? animal.animalThumbnailUrl : "https://newcastlebeach.org/images/dog-and-cat-cartoon-3.jpg"}
                                    description={animal.animalDescription.replace("<div class=\"rgDescription\">", "").replace("</div>", "")}
                                    id={animal.animalID}
                                    generalAge={animal.animalGeneralAge}
                                />
                            </div>
                        ))}
                    </div>
                    {isSearched && searchResults.length ? <PrevNext setPage={props.setPage} /> : <div></div>}
                </div>
            </div >
        </div>
    );
}

export default BodyNoLogin