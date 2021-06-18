import React from "react";
import HeaderNav from "../Header/HeaderNav";
import Footer from "../Footer/Footer"
import "./AnimalTips.css"



function AnimalTips() {
    return (
        <div class="container">
            <div className="tile-is-ancestor">
                <HeaderNav />
                <div className = "animaltips">
                    
                </div>
                <Footer />
            </div >
        </div>
    );
}

export default AnimalTips