import React from 'react';
import Router from 'next/router';
import { LogoBox, LogoImage ,GetLogoImage} from './logo.style';
type LogoProps = {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
  type?:string;
};

const Logo: React.FC<LogoProps> = ({ imageUrl, alt, onClick,type = '' }) => {
  function onLogoClick() {
    Router.push('/');
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoBox onClick={onLogoClick}>
      {
        type == 'getlive' && (
          <GetLogoImage src={imageUrl} alt={alt} />
        )
      }
      {
        type == '' && (
          <LogoImage src={imageUrl} alt={alt} />
        )
      }
      
    </LogoBox>
  );
};

export default Logo;
