import React from "react";
import Footer from "../Footer/Footer"
import "./Mewsletter.css"



function Mewsletter() {
    return (

        <div className="tile-is-ancestor">
            <div className="columns is-centered">
                <div className="column is-half">
                    <div className = "mewsletter"></div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Mewsletter