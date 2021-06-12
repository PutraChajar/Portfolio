import React from 'react';

const ButtonImage = ({vclass, vimage, valt, vhref}) => {
    return (
        <a href={vhref} className={vclass} target="_blank" rel="noreferrer">
            <img src={vimage} alt={valt} />
        </a>
    )
}

export default ButtonImage;