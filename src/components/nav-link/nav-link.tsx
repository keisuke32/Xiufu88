import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import {defaultTheme} from "../../site-settings/site-theme/default";

type NavLinkProps = {
  router: any;
  href: string;
  label: string;
  intlId?: string;
  icon?: React.ReactNode;
  className?: string;
  iconClass?: string;
  dynamic?: boolean;
  onClick?: () => void;
};

const Icon = styled.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  label,
  intlId,
  router,
  icon,
  className,
  onClick,
  iconClass,
  dynamic,
}) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <div onClick={onClick} className={className ? className : ''}>
      {dynamic ? (
        <Link href={'/'} as={href}>
          <a
            className={isCurrentPath ? ' current-page' : ''}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {icon ? <Icon className={iconClass} style={!isCurrentPath&&{color: "#E0E0E0"}}>{icon}</Icon> : ''}

            <span className="label">
              {intlId ? (
                <FormattedMessage
                  id={intlId ? intlId : 'defaultNavLinkId'}
                  defaultMessage={label}
                />
              ) : (
                label
              )}
            </span>
          </a>
        </Link>
      ) : (
        <Link href={href}>
          <a
            className={isCurrentPath ? ' current-page' : ''}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {icon ? <Icon className={iconClass}>{icon}</Icon> : ''}

            <span className="label">
              {intlId ? (
                <FormattedMessage
                  id={intlId ? intlId : 'defaultNavLinkId'}
                  defaultMessage={label}
                />
              ) : (
                label
              )}
            </span>
          </a>
        </Link>
      )}
    </div>
  );
};

export default withRouter(NavLink);
