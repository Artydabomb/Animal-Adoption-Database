import React, { useState, useEffect } from "react";
import HeaderNav from "../Header/HeaderNav";
import Footer from "../Footer/Footer"
import "./savedAnimals.css"
import api from "../../utils/API";

function SavedAnimals() {

    const [savedAnimals, setSavedAnimals] = useState({
        savedAnimals: ""
    });

    useEffect(() => {
        api.getSavedAnimals()
        .then(res=>setSavedAnimals(JSON.stringify(res.data)))
    }, [])

    return (

        <div className="tile-is-ancestor">
            <h1>ASLDKFALSDKFJASDKFJKJ</h1>
            <div className = "savedanimals">
                Saved Animals: 
                {savedAnimals ? <div>{savedAnimals}</div> : <div>No saved animals</div>}
            </div>
            <Footer />
        </div >
    );
}

export default SavedAnimals