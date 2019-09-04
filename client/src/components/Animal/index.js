import React from 'react';

function Animal(props) {
    return (
        <div className="card">
            <h5>{props.name}</h5>
            <h5>{props.type}</h5>
        </div>
    );
}

export default Animal