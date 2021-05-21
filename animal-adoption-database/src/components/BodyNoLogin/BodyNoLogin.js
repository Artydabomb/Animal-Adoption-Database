import React from "react";
import CardContent from "../CardContent/CardContent";
import "./BodyNoLogin.css";

function BodyNoLogin() {
    return (
        <div className="tile is-ancestor parentTile">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns">
                        <div className="column">
                            <CardContent />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <CardContent />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <CardContent />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <CardContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyNoLogin