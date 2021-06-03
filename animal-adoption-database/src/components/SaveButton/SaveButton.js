import React from "react";
import { useState } from "react";

function Button() {
    const [noLogin, loggedIn] = useState('Unsaved');

    return (
        <div>
            <h1>{noLogin}</h1>
            <button onClick={() => setMessage('Saved!')}>Add to favorites!</button>
        </div>
    );
}

export default Button;