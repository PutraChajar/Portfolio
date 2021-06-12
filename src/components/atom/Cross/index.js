import React from 'react';

const Cross = ({kelas}) => {
    return (
        <svg className={kelas} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.06066" y1="1.93934" x2="12.6673" y2="12.5459" stroke="#2980B9" strokeWidth="3"/>
            <line x1="1.93934" y1="12.5459" x2="12.5459" y2="1.93934" stroke="#2980B9" strokeWidth="3" strokeLinejoin="round"/>
        </svg>
    )
}

export default Cross;