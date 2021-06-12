import React from 'react';

const Rectangle = ({kelas}) => {
    return (
        <svg className={kelas} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="9" height="9" stroke="#2980B9"/>
        </svg>
    )
}

export default Rectangle;