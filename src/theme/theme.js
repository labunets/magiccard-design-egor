import { createTheme } from '@mui/material/styles';

// Кольори з дизайну Colors.png
const theme = createTheme({
  palette: {
    primary: {
      main: '#543BAD', // Фіолетовий основний колір
      light: '#6B52BD',
      dark: '#432F8A',
    },
    secondary: {
      main: '#E56515', // Помаранчевий для кнопок та акцентів
      light: '#FF7B2E',
      dark: '#CC5512',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7F7F7',
      grey: '#F2F2F2',
    },
    text: {
      primary: '#212121',
      secondary: '#595959',
      disabled: '#B2B2B2',
    },
    grey: {
      50: '#FFFFFF',
      100: '#F7F7F7',
      200: '#F2F2F2',
      300: '#E9E9E9',
      400: '#B2B2B2',
      500: '#6F6F6F',
      600: '#595959',
      700: '#2D2D2D',
      800: '#212121',
    },
  },
  typography: {
    fontFamily: '"Google Sans", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontSize: '12px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.24px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: '14px 26px',
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 100,
            '& fieldset': {
              borderColor: '#E9E9E9',
            },
          },
        },
      },
    },
  },
});

export default theme;
