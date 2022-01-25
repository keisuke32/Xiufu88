const baseColor = {
    white: '#ffffff',
    black: '#000000',

    gray: {
        100: '#fAfAfA',
        200: '#F8F8F8',
        300: '#f4f4f4',
        400: '#F3F3F3',
        500: '#F2F2F2', // border alt color
        600: '#EdEdEd',
        700: '#E0E0E0', // border color
        800: '#BDBDBD',
        900: '#828282',
        1000: '#4F4F4F',
    },
    checkout: {
        gray1: '#FFF3F7',
        gray2: '#FFD3E2',
        button : {
            photo: '#89A8D2',
            border: '#738AAA',
        }
    },
    text: {
        bold: '#0D1136', // heading color
        gray1: "#333333", // gray 1
        medium: '#424561',
        regular: '#4F4F4F', // regular text color
        light: '#909090',
        label: '#767676',
        error: '#b10000'
    },
    transparent: 'transparent',
    primary: {
        regular: '#F00000', // primary color
        hover: '#da2f17',
        alternate: '#FA4C4C',
        light: '#FC7171',
    },
    secondary: {
        regular: '#ff5b60',
        hover: '#FF282F',
        alternate: '#fc5c63',
    },
    yellow: {
        regular: '#FF7A00',
        hover: '#FFB369',
        alternate: '#f4c243',
    },
    blue: {
        regular: '#2F80ED',
        dark: '#161F6A',
        light: '#2D9CDB',
        link: '#004FB9',
    },
    green: {
        regular: '#27AE60',
        dark: '#166A1F',
        bluedark: '#1A1A1A',
        light: '#F8FFFC',
        link: '#00B94F',
        alternate: '#C4E8F8',
    },
    pink: {
        highlight: '#FC7171',
    },
    fog: {
        regular: '#DCDCFF',
        light: '#F8F8FF',
        alternate: '#F3F3FF',
    },
    red: '#BE0000',
    price: '#EF3900',
    badge: '#CA180077',
    success: '',
    warning: '',
    muted: '',
    highlight: '',
    background: '#F2F2F2'
};

export const defaultTheme = {
    colors: {
        ...baseColor,
        body: {
            bg: '',
            text: '',
        },
        borderColor: 'gray.500',
        headingsColor: 'text.bold',
        subheadingsColor: '',
        textColor: 'text.regular',
        buttonColor: 'white',
        buttonBgColor: 'primary.regular',
        buttonBgHoverColor: 'primary.hover',
        buttonBorderColor: 'primary.regular',
        linkColor: 'primary.regular',
        input: {
            text: '',
            bg: '',
            border: '',
            focus: '',
            placeholder: '',
        },
    },
    // btnBorderRadius: '',
    breakpoints: ['767px', '991px', '70em', '90em'],
    // space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    // export const space = [0, 0.25, 0.5, 1, 1.5, 3].map(n => n + 'rem')

    // fontSizes: [10, 13, 15, 19, 21, 30, 45],
    // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontSizes: {
        ms: 10,
        xs: 12,
        sm: 13,
        base: 14,
        placeholder: 16,
        rating: 18,
        md: 19,
        badge: 17,
        lg: 21,
        xl: 24,
        xl2: 27,
        '2xl': 30,
        '3xl': 36,
        '4xl': 42,
        '5xl': 48,
    },
    // fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    fontWeights: {
        body: 400,
        heading: 700,
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        bolder: 900,
    },
    fonts: {
        body: 'Microsoft YaHei',
        heading: 'Poppins, sans-serif',
        monospace: 'Menlo, monospace',
    },

    // Custom Theme keys
    customs: {
        // transitions: {
        //   base: '.3s ease-out',
        // },
        transition: '0.35s ease',
    },
    // lineHeights: {
    //   solid: 1,
    //   title: 1.25,
    //   copy: 1.5,
    // },
    lineHeights: {
        body: 1.5,
        // body: 1.625,
        heading: 1.125,
        // heading: 1.25,
    },

    boxSizing: 'border-box',
    radii: {
        base: '6px',
        small: '3px',
        medium: '12px',
        big: '18px',
    },
    shadows: {
        base: '0 3px 6px rgba(0, 0, 0, 0.16)',
        medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
        big: '0 21px 36px rgba(0, 0, 0, 0.16)',
        header: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
    // letterSpacings: {
    //   normal: 'normal',
    //   tracked: '0.1em',
    //   tight: '-0.05em',
    //   mega: '0.25em',
    // },
    // borders: {
    //   0,
    //   sm:'1px solid',
    //   medium:'2px solid',
    //   large:'3px solid',
    //   '4px solid',
    //   '5px solid',
    //   '6px solid',
    // },
    // radius: [3, 4, 5, 6, '50%'],
    // widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
    // heights: [36, 40, 44, 48, 50, 54, 70, 81, 128],
    // maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
    globals: {
        // body: {
        //   backgroundColor: 'red',
        //   fontFamily: 'body',
        //   lineHeight: 'body',
        //   fontWeight: 'body',
        // },
    },
};
// xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px
