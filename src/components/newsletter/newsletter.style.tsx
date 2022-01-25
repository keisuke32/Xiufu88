import styled, {css} from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import systemCss from '@styled-system/css';

export const NewsLetterWrapper = styled.div<any>(
    (props) =>
        systemCss({
            width: '50vw',
            height: '100vh',
            // backgroundImage: `url(${props.image})`,
            backgroundSize: '100% 100%',
            margin: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
        })
);

export const NewsLetterContent = styled.div<any>(
    (props) =>
        systemCss({
            width: '50wh',
            height: '100vh',
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'auto 90%',
            margin: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% calc(50% + 50px)',
        }),
    css`
        input {
                display: none;
                top: calc(50% + 80px);
                position: absolute;
                left: calc(50% - 15%);
                width: 30%;
                height: 5%;
        }
    `
);
