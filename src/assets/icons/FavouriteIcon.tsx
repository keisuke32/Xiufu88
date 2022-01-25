import React from 'react';

export const FavouriteIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px',
}) => {
  return (
      <svg width={width} height={height} viewBox="0 0 19 18" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3995 7.0991L11.9744 6.54507L9.4634 0.629395L6.95237 6.554L0.527344 7.0991L5.40643 11.3259L3.94092 17.6079L9.4634 14.2748L14.9859 17.6079L13.5293 11.3259L18.3995 7.0991ZM9.4634 12.6037L6.10344 14.6322L6.99705 10.8076L4.03028 8.23398L7.94427 7.89441L9.4634 4.29318L10.9915 7.90335L14.9055 8.24292L11.9387 10.8165L12.8323 14.6411L9.4634 12.6037Z" fill="#4F4F4F"/>
      </svg>
  );
};
