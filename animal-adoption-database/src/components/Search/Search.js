import React, { useState, useContext, useEffect } from "react";
import 'bulma/css/bulma.min.css';
import API from "../../utils/API";
import SearchContext from "../../utils/SearchContext";

function Search(props) {
    const {searchTerm, searchResults, speciesSearch} = useContext(SearchContext);
    const [formObject, setFormObject] = useState({searchField: "is"})

    useEffect(() => {
        API.searchAnimals({searchField: "dog", speciesSearch: "dog"})
        .then(res=> props.setResults(res.data.data))
    }, [])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value});
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(formObject)
        API.searchAnimals({searchField:formObject.searchField, speciesSearch: formObject.speciesSearch, zipCode: formObject.zipCode})
        .then(res => props.setResults(res.data.data))
    };

    function setSearchSpeciesCat() {
        setFormObject({...formObject, speciesSearch: "cat"})
        API.searchAnimals({searchField:formObject.searchField, speciesSearch: "cat", zipCode: formObject.zipCode})
        .then(res => props.setResults(res.data.data))
    }

    function setSearchSpeciesDog() {
        setFormObject({...formObject, speciesSearch: "dog"})
        API.searchAnimals({searchField:formObject.searchField, speciesSearch: "dog", zipCode: formObject.zipCode})
        .then(res => props.setResults(res.data.data))
    }

    return (

        <nav className="level">
            <div className="level-left">
                <div className="level-item">
                    <form className="field has-addons">
                        <p className="control">
                            <input className="input" type="text" placeholder="Search for animals" onChange={handleInputChange} name="searchField">
                            </input>
                        </p>
                        <p className="control">
                            <input className="input" type="text" placeholder="ZIP" onChange={handleInputChange} name="zipCode">
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
                <p className="level-item"><button className="button" onClick={setSearchSpeciesDog}>Dogs</button></p>
                <p className="level-item"><button className="button" onClick={setSearchSpeciesCat}>Cats</button></p>
            </div>
        </nav >

    );

}

export default Search;
