const palette = {
  white: '#FFFFFF',
  black: '#000000',
  orange: '#FF5733',
} as const

const THEME = {
  colors: {
    light: palette.white,
    dark: palette.black,
    primary: palette.orange,
  },

  sizes: {
    xxxs: '4px',
    xxs: '8px',
    xs: '12px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '40px',
    xxl: '48px',
    xxxl: '56px',
  },

  borderRadii: {
    circle: '50%',
  },

  beakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1440,
  },
} as const

export type TTheme = typeof THEME

export type TThemeColor = keyof TTheme['colors']

export type TThemeSize = keyof TTheme['sizes']

export type TThemeBorderRadius = keyof TTheme['borderRadii']

export default THEME
