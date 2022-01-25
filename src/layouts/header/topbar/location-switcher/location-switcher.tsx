import React from 'react';
import { Box, SelectedItem, MenuItem } from './location-switcher.style';
import Popover from 'components/popover/popover';
import { FormattedMessage } from 'react-intl';
import { useLocale } from 'contexts/location/location.provider';
import { LOCATION_MENU } from 'site-settings/site-navigation';
import {LocationIcon} from "assets/icons/LocationIcon";

const LocationMenu = ({ onClick }) => {
    return (
        <>
            {LOCATION_MENU.map((item) => (
                <MenuItem onClick={onClick} key={item.id} value={item.id}>
                    <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                </MenuItem>
            ))}
        </>
    );
};

const LocationSwitcher: React.FC<{}> = () => {
    const { locale, changeLocation } = useLocale();
    const selectedLocation = LOCATION_MENU.find((x) => x.id === locale);
    const locationChangeHandler = (e) => {
        changeLocation(e.target.value);
    };

    return (
        <Box>
            <LocationIcon />
            <Popover
                className="left"
                handler={
                    <SelectedItem>
                        <span>
                            <FormattedMessage
                                id={selectedLocation?.id}
                                defaultMessage={selectedLocation?.defaultMessage}
                            />
                        </span>
                    </SelectedItem>
                }
                content={<LocationMenu onClick={locationChangeHandler} />}
            />
        </Box>
    );
};

export default LocationSwitcher;
