import React from "react";
import { useState } from "react";

function Button() {
    const [noLogin, loggedIn] = useState('Unsaved');

    return (
        <div>
            <h1>{noLogin}</h1>
            <button onClick={() => loggedIn('Saved!')}>Add to favorites!</button>
            <button onClick={() => loggedIn('Unsaved')}>Removed from favorites</button>
        </div>
    );
}

export default Button;