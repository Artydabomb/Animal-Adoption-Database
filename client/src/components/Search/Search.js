import React, { useState, useContext, useEffect } from "react";
import 'bulma/css/bulma.min.css';
import API from "../../utils/API";
import SearchContext from "../../utils/SearchContext";
import "./Search.css";
import SwitchSelector from "react-switch-selector";


function Search(props) {
    const {searchTerm, searchResults, speciesSearch} = useContext(SearchContext);
    const [formObject, setFormObject] = useState({searchField: ""})

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
        API.searchAnimals({searchField:formObject.searchField, speciesSearch: speciesSearch, zipCode: formObject.zipCode})
        .then(res => props.setResults(res.data.data))
    };

    function setSearchSpeciesCat() {
        setFormObject({...formObject, speciesSearch: "cat"})
        props.setSearchSpeciesCat();
        API.searchAnimals({searchField:formObject.searchField, speciesSearch: "cat", zipCode: formObject.zipCode})
        .then(res => props.setResults(res.data.data))
    }

    function setSearchSpeciesDog() {
        setFormObject({...formObject, speciesSearch: "dog"})
        props.setSearchSpeciesDog();
        API.searchAnimals({searchField:formObject.searchField, speciesSearch: "dog", zipCode: formObject.zipCode})
        .then(res => props.setResults(res.data.data))
    }

    const options = [
        {
            label: <span>Dogs</span>,
            value: "dogs",
            selectedBackgroundColor: "#0097e6",
        },
        {
            label: "Cats",
            value: "cats",
            selectedBackgroundColor: "#fbc531"
        }
     ];
      
     const onChange = (newValue) => {
         console.log(newValue);
     };
      
     const initialSelectedIndex = options.findIndex(({value}) => value === "dogs");

    return (

        <nav className="level">
            <div className="level-left">
                <div className="level-item">
                    <form className="field has-addons">
                        <p className="control">
                            <input className="input search-box" type="text" placeholder="Search by breed" onChange={handleInputChange} name="searchField">
                            </input>
                        </p>
                        <p className="control">
                            <input className="input zip-box" type="text" placeholder="Zipcode" onChange={handleInputChange} name="zipCode">
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
                <p className="level-item filtertxt"><strong>Quick Filter By:</strong></p>
                <div style={{width: 130, height: 40}}>
                    <SwitchSelector
                        onChange={onChange}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#353b48"}
                        fontColor={"#f5f6fa"}
                    />
                </div>
                {/* <p className="level-item"><button className="dogsearch" onClick={setSearchSpeciesDog}>Dogs</button></p>
                <p className="level-item"><button className="catsearch" onClick={setSearchSpeciesCat}>Cats</button></p> */}
            </div>
        </nav >

    );

}

export default Search;
