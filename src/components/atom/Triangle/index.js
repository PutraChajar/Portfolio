import React from 'react';

const Triangle = ({kelas}) => {
    return (
        <svg className={kelas} width="15" height="12" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.73686 9.25L6.5 1L11.2631 9.25H1.73686Z" stroke="#2980B9"/>
        </svg>
    )
}

export default Triangle;