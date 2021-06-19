import React from 'react';
import api from '../../utils/API'

function Profile(props) {
    
    function getSavedAnimals(user) {
        api.getSavedAnimals(user)
    }

    return (
        <>
        <div style={{"backgroundColor": "white"}}>{props.username}Test</div>
        <button onClick={getSavedAnimals({username: 'billy', id: '80'})} ></button>
        </>
    );
}

export default Profile