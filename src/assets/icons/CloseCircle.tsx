import React from 'react';
export const CloseCircle = ({width = '15px',height='15px'}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7.5" r="6.75" stroke="#BDBDBD" stroke-width="1.5"/>
        <path d="M10.7077 4.93775L10.0614 4.2915L7.49935 6.85359L4.93727 4.2915L4.29102 4.93775L6.8531 7.49984L4.29102 10.0619L4.93727 10.7082L7.49935 8.14609L10.0614 10.7082L10.7077 10.0619L8.1456 7.49984L10.7077 4.93775Z" fill="#BDBDBD"/>
    </svg>
  );
};
