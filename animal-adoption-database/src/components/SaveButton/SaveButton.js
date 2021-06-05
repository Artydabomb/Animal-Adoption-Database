import React from "react";
import { useState } from "react";

function Button() {
    const [noLogin, loggedIn] = useState('Unsaved');

    return (
        <div className="has-text-centered">
            <h1>{noLogin}</h1>
            <button className="button is-info is-light m-1" onClick={() => loggedIn('Saved!')}>💖</button>
            <button className="button border is-danger is-light m-1" onClick={() => loggedIn('Unsaved')}>💔</button>
        </div>
    );
}

export default Button;