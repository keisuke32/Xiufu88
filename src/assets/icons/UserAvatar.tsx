import React from 'react';
export const UserAvatarIcon = ({
    color = 'currentColor',
  width = '35px',
  height = '35px',
}) => {
  return (
      <svg width={width} height={height} viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7456 0.287354C12.9237 0.287354 9.01829 4.12982 9.01829 8.87386C9.01829 13.6179 12.9237 17.4604 17.7456 17.4604C22.5674 17.4604 26.4728 13.6179 26.4728 8.87386C26.4728 4.12982 22.5674 0.287354 17.7456 0.287354ZM17.7456 19.607C11.9201 19.607 0.291016 22.4835 0.291016 28.1935V34.6334H35.2001V28.1935C35.2001 22.4835 23.571 19.607 17.7456 19.607Z" fill={color}/>
      </svg>
  );
};
