const color = {
  primary: {
    dark: '#B2343A',
    normal: '#FF4B53',
    light: '#FF6F75'
  },
  support: {
    white: '#FFFFFF',
    gray: '#F9F8FD',
    black: '#333333'
  }
}

const fontFamily = {
  primary: '"Open Sans", sans-serif;',
  secondary: '"Roboto Slab", serif;'
}

const fontSize = {
  title: '2rem',
  subTitle: '1.6rem',
  superText: '1.1rem',
  text: '1rem',
  subText: '.9rem'
}

const fontWeight = {
  regular: '400',
  semBold: '600',
  bold: '700'
}

const transition = {
  slow: '1.3s',
  medium: '.7s',
  fast: '.3s'
}

const backGroundTransparent = {
  weak: '44',
  medium: '88',
  strong: 'CC'
}

const boxShadow = {
  low: '0 0 40px -30px black',
  medium: '0 0 40px -20px black',
  high: '0 0 40px -10px black'
}

const borderRadius = '5px'

const breakpoints = {
  xs: '0',
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200'
}

const opacity = {
  transparent: '.4',
  medium: '.6',
  light: '.9'
}

const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
}

const theme = {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  transition,
  backGroundTransparent,
  boxShadow,
  borderRadius,
  breakpoints,
  opacity,
  zIndex
}

export default theme
