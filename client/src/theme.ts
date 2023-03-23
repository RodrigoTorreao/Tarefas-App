
// mui theme settings
export const themeSettings = () => {
  return {
    palette: {
      // palette values for dark mode
      primary: {
        main: '#E4C1F9'
      },
      secondary: {
        main: '#fffff'
      },

      background: {
        default: '#ffff',
        alt: '#F1FFFA'
      }

    },
    typography: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 40
      },
      h2: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 32
      },
      h3: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 24
      },
      h4: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 20
      },
      h5: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 16
      },
      h6: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 14
      }
    }
  }
}
