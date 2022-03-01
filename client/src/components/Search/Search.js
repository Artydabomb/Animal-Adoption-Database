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
    const [advancedSearch, setadvancedSearch] = useState({size: "Size", activity: "Activity level", sex: "Sex", radius: "Search Radius"})
    const [advancedSearchHidden, setAdvancedSearchHidden] = useState("true")
    const { page } = useContext(SearchContext);

    useEffect(() => {
        API.searchAnimals({searchField: "", species: "dog"})
        .then(res=>props.setResults(res.data.data, res.data.foundRows))
    }, [])

    useEffect(() => {
        API.searchAnimals({searchField:formObject.searchField, species: formObject.species, zipCode: formObject.zipCode, page:page, size: advancedSearch.size, activity: advancedSearch.activity, sex: advancedSearch.sex, radius: advancedSearch.radius})
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
            API.searchAnimals({searchField:formObject.searchField, species: formObject.species, zipCode: formObject.zipCode, page:1, size: advancedSearch.size, activity: advancedSearch.activity, sex: advancedSearch.sex, radius: advancedSearch.radius})
            .then(res=>props.setResults(res.data.data, res.data.foundRows))
        } else {
            props.setPage(1)
        }
    };

    function toggleAdvancedSearch() { 
        setAdvancedSearchHidden(!advancedSearchHidden)
    }

    function toggleSizeDropdown() {
        document.getElementById("sizeDropdown").className === "dropdown is-active m-1" ? document.getElementById("sizeDropdown").className = "dropdown m-1" : document.getElementById("sizeDropdown").className = "dropdown is-active m-1"
    }

    function selectSize(size) {
        document.getElementById("sizeDropdown").className = "dropdown m-1";
        let sizes = document.getElementsByClassName("size");
        for (const c of sizes) {
            c.className="dropdown-item size"
        }
        document.getElementById(size).className = "dropdown-item size is-active"
        setadvancedSearch({...advancedSearch, size})
    }

    function toggleActivityDropdown() {
        document.getElementById("activityDropdown").className === "dropdown m-1 is-active" ? document.getElementById("activityDropdown").className = "dropdown m-1" : document.getElementById("activityDropdown").className = "dropdown m-1 is-active"
    }

    function selectActivity(activity) {
        // Turn off the dropdown
        document.getElementById("activityDropdown").className = "dropdown m-1";
        // Iterate over other activities to remove is-active
        let activities = document.getElementsByClassName("activity");
        for (const c of activities) {
                c.className="dropdown-item activity"
        }
        document.getElementById(activity).className = "dropdown-item activity is-active"
        setadvancedSearch({...advancedSearch, activity})
    }

    function toggleSexDropdown() {
        document.getElementById("sexDropdown").className === "dropdown is-active m-1" ? document.getElementById("sexDropdown").className = "dropdown m-1" : document.getElementById("sexDropdown").className = "dropdown is-active m-1"
    }

    function selectSex(sex) {
        document.getElementById("sexDropdown").className = "dropdown m-1";
        let sexes = document.getElementsByClassName("sex");
        for (const c of sexes) {
            c.className="dropdown-item sex"
        }
        document.getElementById(sex).className = "dropdown-item sex is-active"
        setadvancedSearch({...advancedSearch, sex})
    }

    function toggleRadiusDropdown() {
        document.getElementById("radiusDropdown").className === "dropdown is-active m-1" ? document.getElementById("radiusDropdown").className = "dropdown m-1" : document.getElementById("radiusDropdown").className = "dropdown is-active m-1"
    }

    function selectRadius(radius) {
        document.getElementById("radiusDropdown").className = "dropdown m-1";
        let radii = document.getElementsByClassName("radius");
        for (const c of radii) {
            c.className="dropdown-item radius"
        }
        document.getElementById(radius).className = "dropdown-item radius is-active"
        setadvancedSearch({...advancedSearch, radius})
    }

    const options = [
        {
            label: "Dogs",
            value: "dog",
            selectedBackgroundColor: "#5aa7a7",
            fontColor: "black",
            selectedFontColor: "white"
        },
        {
            label: "Cats",
            value: "cat",
            selectedBackgroundColor: "#5aa7a7",
            fontColor: "black",
            selectedFontColor: "white"
        }
     ];
      
     const onChange = (newValue) => {
         setFormObject({...formObject, species: newValue});
        if (page === 1) {
            API.searchAnimals({searchField:formObject.searchField, species: newValue, zipCode: formObject.zipCode, page: 1, size: advancedSearch.size, activity: advancedSearch.activity, sex: advancedSearch.sex, radius: advancedSearch.radius})
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
                            <input className="input search-box" type="text" placeholder="Breed" onChange={handleInputChange} name="searchField">
                            </input>
                        </p>
                        <p className="control">
                            <input className="input zip-box" type="text" placeholder="Zip" onChange={handleInputChange} name="zipCode">
                            </input>
                        </p>
                        <p className="control">
                            <button className="button" onClick={handleFormSubmit}>
                                Search
                            </button>
                        </p>
                        <p className="control">
                            <a className="button" onClick={toggleAdvancedSearch}><FontAwesomeIcon icon={faSortDown} /></a>
                        </p>
                    </form>
                </div>
            </div>


            <div className="level-right">
                <div className="switchSelector">
                    <SwitchSelector
                        onChange={onChange}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"white"}
                        fontColor={"#f5f6fa"}
                    />
                </div>
            </div>
        </nav >
        <div hidden={advancedSearchHidden} >
            <div className="box mb-5 main">
                <div className="columns">
                    <div className="column is-one-fifth has-text-centered mt-3">
                        <p className="title is-5">Additional Fields:</p>
                    </div>
                    <div className="column is-four-fifths">
                        {/* Advanced Search - Size */}
                            <div className="dropdown m-1" id="sizeDropdown">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleSizeDropdown}>
                                    <span>{advancedSearch.size}</span>
                                    <span className="icon is-small">
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                    <a className="dropdown-item size" id="Small" onClick={() => selectSize("Small")}>
                                        Small
                                    </a>
                                    <a className="dropdown-item size" id="Medium" onClick={() => selectSize("Medium")}>
                                        Medium
                                    </a>
                                    <a className="dropdown-item size" id="Large" onClick={() => selectSize("Large")}>
                                        Large
                                    </a>
                                    <a className="dropdown-item size" id="X-Large" onClick={() => selectSize("X-Large")}>
                                        X-Large
                                    </a>
                                    <a className="dropdown-item size" id="Any Size" onClick={() => selectSize("Any Size")}>
                                        Any Size
                                    </a>
                                    </div>
                                </div>
                            </div>
                        {/* Advanced Search - Activity level */}
                            <div className="dropdown m-1" id="activityDropdown">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleActivityDropdown}>
                                    <span>{advancedSearch.activity}</span>
                                    <span className="icon is-small">
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                    <a className="dropdown-item activity" id="Not Active" onClick={() => selectActivity("Not Active")}>
                                    Not Active
                                    </a>
                                    <a className="dropdown-item activity" id="Slightly Active" onClick={() => selectActivity("Slightly Active")}>
                                    Slightly Active
                                    </a>
                                    <a className="dropdown-item activity" id="Moderately Active" onClick={() => selectActivity("Moderately Active")}>
                                    Moderately Active
                                    </a>
                                    <a className="dropdown-item activity" id="Highly Active" onClick={() => selectActivity("Highly Active")}>
                                    Highly Active
                                    </a>
                                    <a className="dropdown-item activity" id="Any Activity Level" onClick={() => selectActivity("Any Activity Level")}>
                                    Any Activity Level
                                    </a>
                                    </div>
                                </div>
                            </div>
                        {/* Advanced Search - Sex */}
                        <div className="dropdown m-1" id="sexDropdown">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleSexDropdown}>
                                    <span>{advancedSearch.sex}</span>
                                    <span className="icon is-small">
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                    <a className="dropdown-item sex" id="Male" onClick={() => selectSex("Male")}>
                                    Male
                                    </a>
                                    <a className="dropdown-item sex" id="Female" onClick={() => selectSex("Female")}>
                                    Female
                                    </a>
                                    <a className="dropdown-item sex" id="Any Sex" onClick={() => selectSex("Any Sex")}>
                                    Any Sex
                                    </a>
                                    </div>
                                </div>
                            </div>
                        {/* Advanced Search - Radius */}
                        <div className="dropdown m-1" id="radiusDropdown">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleRadiusDropdown}>
                                <span>{advancedSearch.radius}</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faSortDown} />
                                </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                <a className="dropdown-item radius" id="10" onClick={() => selectRadius("10")}>
                                10 miles
                                </a>
                                <a className="dropdown-item radius" id="20" onClick={() => selectRadius("20")}>
                                20 miles
                                </a>
                                <a className="dropdown-item radius" id="50" onClick={() => selectRadius("50")}>
                                50 miles
                                </a>
                                <a className="dropdown-item radius" id="100" onClick={() => selectRadius("100")}>
                                100 miles
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="button m-1" style={{"float": "right"}} onClick={handleFormSubmit}>Search</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default Search;
