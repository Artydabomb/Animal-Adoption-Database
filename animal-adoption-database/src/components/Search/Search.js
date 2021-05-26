import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import API from "../../utils/API"

function Search() {

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.searchAnimals(
            formObject.searchField
        )
    };

    return (

        <nav className="level">
            <div className="level-left">
                <div className="level-item">
                    <p className="subtitle is-5">
                        <strong>123</strong> posts
                    </p>
                </div>
                <div className="level-item">
                    <form className="field has-addons">
                        <p className="control">
                            <input className="input" type="text" placeholder="Find a post" onChange={handleInputChange} name="searchField">
                            </input>
                        </p>
                        <p className="control">
                            <button className="button" onClick={handleFormSubmit}>
                                Search
                            </button>
                        </p>
                    </form>
                </div>
            </div>


            <div className="level-right">
                <p className="level-item"><strong>Quick Filter By:</strong></p>
                <p className="level-item"><a href="test">Dogs</a></p>
                <p className="level-item"><a href="test">Cats</a></p>
                <p className="level-item"><a className="button is-success" href="test">New</a></p>
            </div>
        </nav >

    );

}

export default Search;
