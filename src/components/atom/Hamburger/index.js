import React from 'react';

const Hamburger = ({onklik}) => {
    return (
        <div id="hamburger" className="hamburger" onClick={onklik}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;