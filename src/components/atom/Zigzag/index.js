import React from 'react';

const Zigzag = ({kelas}) => {
    return (
        <svg className={kelas} width="26" height="5" viewBox="0 0 26 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L5.5 1L8.5 4L13.5 1L16.5 4L21 1L25 4" stroke="#2980B9"/>
        </svg>
    )
}

export default Zigzag;