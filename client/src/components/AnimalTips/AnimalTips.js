import React from "react";
import Footer from "../Footer/Footer"
import "./AnimalTips.css"

function AnimalTips() {
    return (
        <div className="tile-is-ancestor">
            <div className="columns is-centered">
                <div className="column is-half">
                    <div className = "animaltips"></div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default AnimalTips