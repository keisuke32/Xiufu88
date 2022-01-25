import React, {Fragment} from 'react';
import {useTransition, animated} from 'react-spring';
import {BaseModal} from 'react-spring-modal';
import {CloseIcon} from 'assets/icons/CloseIcon';
import {Scrollbar} from 'components/scrollbar/scrollbar';

type SpringModalProps = {
    isOpen: boolean;
    isCloseButton: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
    style?: any;
};

const MobileModal: React.FC<SpringModalProps> = (
    {
        isOpen,
        isCloseButton,
        onRequestClose,
        children,
        style = {},
    }) => {
    const transition = useTransition(isOpen, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    });

    const staticStyles = {
        zIndex: 99999,
    };

    const buttonStyle = {
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        color: '#BDBDBD',
        outline: 0,
        boxShadow: 'none',
        borderRadius: '50%',
        position: 'fixed' as 'fixed',
        right: 0,
        top: 0,
        zIndex: 100000,
        cursor: 'pointer',
        border: '0',

        ':focus': {
            outline: 0,
            boxShadow: 'none',
        },
    };

    const scrollbarStyle = {
        height: '100%',
        width: '100%',
        // maxHeight: 'calc(100vh - 30px)',
    };

    return (
        <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
            {transition.map(
                ({item, key, props: transitionStyles}) =>
                    item && (
                        <Fragment key={key}>
                            <animated.div style={{...transitionStyles}}>
                                {isCloseButton &&
                                <button
                                    type='button'
                                    onClick={onRequestClose}
                                    style={{...buttonStyle}}
                                >
                                    &#x2715;
                                </button>}
                            </animated.div>

                            <animated.div
                                key={key}
                                style={{...transitionStyles, ...staticStyles, ...style}}
                            >
                                <Scrollbar style={{...scrollbarStyle}}>{children}</Scrollbar>
                            </animated.div>
                        </Fragment>
                    )
            )}
        </BaseModal>
    );
};

export default MobileModal;
