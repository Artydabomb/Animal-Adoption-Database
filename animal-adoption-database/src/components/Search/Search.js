import React, { useState, useContext, useEffect } from "react";
import 'bulma/css/bulma.min.css';
import API from "../../utils/API";
import SearchContext from "../../utils/SearchContext";

function Search(props) {
    const {searchTerm, searchResults, speciesSearch} = useContext(SearchContext);
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        API.searchAnimals({searchField: "dog", speciesSearch: "dog"})
        .then(res=> props.setResults(res.data.data))
    }, [])

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(speciesSearch)
        setFormObject({...formObject, [name]: value});
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        search();
    };

    function search() {
        API.searchAnimals({searchField:formObject.searchField, speciesSearch: speciesSearch})
        .then(res => props.setResults(res.data.data))
    }

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
                        <p className="control search-bar">
                            <input className="input" type="text" placeholder="Find a post" onChange={handleInputChange} name="searchField">
                            </input>
                        </p>
                        <p className="control search-button">
                            <button className="button" onClick={handleFormSubmit}>
                                Search
                            </button>
                        </p>
                    </form>
                </div>
            </div>


            <div className="level-right">
                <p className="level-item"><strong>Quick Filter By:</strong></p>
                <p className="level-item"><button onClick={() => {
                    props.setSearchSpeciesDog;
                    search();
                }}>Dogs</button></p>
                <p className="level-item"><button onClick={() => {
                    props.setSearchSpeciesCat;
                    search();
                }}>Cats</button></p>
                <p className="level-item"><a className="button is-success" href="test">New</a></p>
            </div>
        </nav >

    );

}

export default Search;
