import React from 'react';
import api from '../../utils/API'

function Profile(props) {
    


    function getSavedAnimals() {
        api.getSavedAnimals()
    }

    return (
        <>
        <div style={{"backgroundColor": "white"}}>{props.username}Test</div>
        <button onClick={getSavedAnimals} ></button>
        </>
    );
}

export default Profile