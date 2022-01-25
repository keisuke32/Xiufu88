import React from 'react';
export const UploadIcon = ({
  color = 'currentColor',
  width = '15',
  height = '15',
}) => {
  return (
      <svg width={width} height={height} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.25 2.75H0V5.875H0.00625L0 11.5C0 12.1875 0.5625 12.75 1.25 12.75H12.5V11.5H1.25V2.75ZM13.75 1.5H8.75L7.5 0.25H3.75C3.0625 0.25 2.50625 0.8125 2.50625 1.5L2.5 9C2.5 9.6875 3.0625 10.25 3.75 10.25H13.75C14.4375 10.25 15 9.6875 15 9V2.75C15 2.0625 14.4375 1.5 13.75 1.5ZM4.375 8.375L7.1875 4.625L9.375 7.44375L10.9375 5.5625L13.125 8.375H4.375Z" fill={color} />
      </svg>

  );
};
