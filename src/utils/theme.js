
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  shadows: ["none"],
  shape: {
    borderRadius: 0
  },
  palette: {
    type: "light",
    primary: {
      main: '#1f1f1f',
      light: '#2c2c2c',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fff',
      light: '#c3c3c3',
      dark: '#fff',
      contrastText: '#000',
    },
  },
});

// export const themeOptions = {
//   palette: {
//     type: 'dark',
//   },
// };