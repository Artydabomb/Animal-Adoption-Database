import React from "react";
import { useState } from "react";

function Button() {
    const [saved, setSaved] = useState('Unsaved');

    return (
        <div className="has-text-centered">
            <h1>{saved}</h1>
            <button className="button is-info is-light m-1" onClick={() => setSaved('Saved!')}>💖</button>
            <button className="button border is-danger is-light m-1" onClick={() => setSaved('Unsaved')}>💔</button>
        </div>
    );
}

export default Button;