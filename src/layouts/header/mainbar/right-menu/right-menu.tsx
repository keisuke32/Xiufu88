import React from 'react';
import dynamic from 'next/dynamic';
import { RightMenuBox } from './right-menu.style';

const AuthMenu = dynamic(() => import('../auth-menu'), { ssr: false });

type Props = {
  onLogout: () => void;
  onJoin: () => void;
  onSignUp: () => void;
  avatar: string;
  isAuthenticated: boolean;
};

export const RightMenu: React.FC<Props> = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin,
  onSignUp,
}) => {
  return (
    <RightMenuBox>
      <AuthMenu
        avatar={avatar}
        onJoin={onJoin}
        onSignUp={onSignUp}
        onLogout={onLogout}
        isAuthenticated={isAuthenticated}
      />
    </RightMenuBox>
  );
};
