import React, { useState, useEffect, useContext } from "react";
import 'bulma/css/bulma.min.css';
import API from "../../utils/API";
import "./Search.css";
import SwitchSelector from "react-switch-selector";
import SearchContext from "../../utils/SearchContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


function Search(props) {
    const [formObject, setFormObject] = useState({searchField: ""})
    const [advancedSearch, setAdvancedSearch] = useState("true")
    const { page, rows } = useContext(SearchContext);

    useEffect(() => {
        API.searchAnimals({searchField: "", species: "dog"})
        .then(res=>props.setResults(res.data.data, res.data.foundRows))
    }, [])

    useEffect(() => {
        API.searchAnimals({searchField:formObject.searchField, species: formObject.species, zipCode: formObject.zipCode, page:page})
        .then(res=> {
            props.setResults(res.data.data, res.data.foundRows)
        })
    }, [page])
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value});
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (page === 1) {
            API.searchAnimals({searchField:formObject.searchField, species: formObject.species, zipCode: formObject.zipCode, page:1})
            .then(res=>props.setResults(res.data.data, res.data.foundRows))
        } else {
            props.setPage(1)
        }
    };

    function toggleAdvancedSearch() { 
        setAdvancedSearch(!advancedSearch)
        console.log(advancedSearch)
    }

    function toggleSizeDropdown() {
        document.getElementById("sizeDropdown").className === "dropdown is-active" ? document.getElementById("sizeDropdown").className = "dropdown" : document.getElementById("sizeDropdown").className = "dropdown is-active"
    }

    const options = [
        {
            label: "Dogs",
            value: "dog",
            selectedBackgroundColor: "#D9DBF1",
            fontColor: "white",
            selectedFontColor: "black"
        },
        {
            label: "Cats",
            value: "cat",
            selectedBackgroundColor: "#D9DBF1",
            fontColor: "white",
            selectedFontColor: "black"
        }
     ];
      
     const onChange = (newValue) => {
         setFormObject({...formObject, species: newValue});
        if (page === 1) {
            API.searchAnimals({searchField:formObject.searchField, species: newValue, zipCode: formObject.zipCode, page: 1})
            .then(res => props.setResults(res.data.data, res.data.foundRows))
        } else {
            props.setPage(1)
        }
        };
      
     const initialSelectedIndex = options.findIndex(({value}) => value === "dog");

    return (
        <>
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
                        <p className="control">
                            <a className="button" onClick={toggleAdvancedSearch}></a>
                        </p>
                    </form>
                </div>
            </div>


            <div className="level-right">
                <div style={{width: 130, height: 40}}>
                    <SwitchSelector
                        onChange={onChange}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#353b48"}
                        fontColor={"#f5f6fa"}
                    />
                </div>
            </div>
        </nav >
        <div hidden={advancedSearch} >
            <div className="box mb-5 main">
                <div className="columns">
                    <div className="column is-one-fifth has-text-centered mt-2">
                        <p className="title is-5">Advanced Search:</p>
                    </div>
                    <div className="column">
                        <div className="dropdown is-active" id="sizeDropdown">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleSizeDropdown}>
                                <span>Size</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faSortDown} />
                                </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    Small
                                </a>
                                <a className="dropdown-item">
                                    Medium
                                </a>
                                <a href="#" className="dropdown-item">
                                    Large
                                </a>
                                <a href="#" className="dropdown-item">
                                    X-Large
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default Search;
