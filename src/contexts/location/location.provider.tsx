import React from 'react';

import { IntlProvider } from 'react-intl';
import { InjectRTL } from 'assets/styles/global.style';
import Cookie from 'js-cookie';
import { isRTL, isLocale } from './location.utils';
import { StyleSheetManager } from 'styled-components';
import RTLPlugin from 'stylis-plugin-rtl';

const LocationContext = React.createContext({} as any);

export const LocationProvider = ({ children, messages }) => {
  const [locale, setLocale] = React.useState('zh');
  const changeLocation = (newLocale): void => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    Cookie.set('locale', newLocale);
  };
  React.useEffect(() => {
    const localSetting = Cookie.get('locale');
    if (localSetting && isLocale(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);
  let isRtl = isRTL(locale);

  return (
    <LocationContext.Provider value={{ locale, changeLocation, isRtl }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <InjectRTL lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
          <StyleSheetManager stylisPlugins={isRtl ? [RTLPlugin] : []}>
            {children}
          </StyleSheetManager>
        </InjectRTL>
      </IntlProvider>
    </LocationContext.Provider>
  );
};

export const useLocale = () => React.useContext(LocationContext);
