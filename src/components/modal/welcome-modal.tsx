import React, {Fragment} from 'react';
import {useTransition, animated} from 'react-spring';
import {BaseModal} from 'react-spring-modal';
import {CloseIcon} from 'assets/icons/CloseIcon';
import {Scrollbar} from 'components/scrollbar/scrollbar';

type SpringModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
    style?: any;
};

const WelcomeModal: React.FC<SpringModalProps> = (
    {
        isOpen,
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
        padding: 0,
        maxWidth: 'calc(100% - 30px)',
        height: 'auto',
        maxHeight: 'calc(100vh - 30px)',
        borderRadius: '10px',
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 99999,
    };

    const buttonStyle = {
        width: '5vh',
        height: '5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        color: 'red',
        outline: 0,
        boxShadow: 'none',
        borderRadius: '50%',
        position: 'fixed' as 'fixed',
        bottom: '10%',
        right: 'calc(50% - 30px)',
        zIndex: 100000,
        cursor: 'pointer',
        border: '3px solid red',

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
                                <button
                                    type='button'
                                    onClick={onRequestClose}
                                    style={{...buttonStyle}}
                                >
                                    <CloseIcon style={{width: 30, height: 30}}/>
                                </button>
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

export default WelcomeModal;
