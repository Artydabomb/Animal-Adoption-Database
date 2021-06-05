import React from "react";
import { useState } from "react";

function Button() {
    const [noLogin, loggedIn] = useState('Unsaved');
<<<<<<< HEAD

    //Create function to send button information to API route

    return (
        <div>
            <h1>{noLogin}</h1>
            <button onClick={() => loggedIn('Saved!')}>Add to favorites!</button>
            <button onClick={() => loggedIn('Unsaved')}>Removed from favorites</button>
        </div>
    );
}
=======
   
    if (loggedIn) {
        return (
            <div className="has-text-centered">
                <h1>{noLogin}</h1>
                <button className="button is-info is-light m-1" onClick={() => loggedIn('Saved!')}>💖</button>
                <button className="button border is-danger is-light m-1" onClick={() => loggedIn('Unsaved')}>💔</button>
            </div>
        );
}}
>>>>>>> 4377a7278a34b158ac354072d33c999f14c69982

export default Button;