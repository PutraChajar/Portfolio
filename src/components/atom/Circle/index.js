import React from 'react';

const Circle = ({kelas}) => {
    return (
        <svg className={kelas} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="4.5" stroke="#2980B9"/>
        </svg>
    )
}

export default Circle;