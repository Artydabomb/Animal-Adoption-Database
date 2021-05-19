import React from "react";

function BodyNoLogin() {
    return (
        <div class="tile is-ancestor">
            <div class="tile is-4 is-vertical is-parent">
                <div class="tile is-child box">
                    <p class="title">One</p>
                </div>
                <div class="tile is-child box">
                    <p class="title">Two</p>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <p class="title">Three</p>
                </div>
            </div>
        </div>
    );
}

export default BodyNoLogin