import React from "react";
import CardContent from "../CardContent/CardContent";

function BodyNoLogin() {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <div className="tile is-child box">
                    <CardContent />
                </div>
            </div>
        </div>
    );
}

export default BodyNoLogin