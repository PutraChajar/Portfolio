import React from 'react';

const Shadow = ({klikShadow, scrollShadow}) => {
    return (
        <div className="shadow" id="shadow" onClick={klikShadow}></div>
    )
}

export default Shadow;