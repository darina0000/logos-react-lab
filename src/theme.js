import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#35c62f',      // зелёный Логос
      light: '#94cb25',     // лайм
      dark: '#076151',
      contrastText: '#fff',
    },
    secondary: {
      main: '#a90dff',      // фиолетовый
      light: '#d066ff',
      dark: '#7a00b8',
      contrastText: '#fff',
    },
    warning: {
      main: '#ffd11b',      // жёлтый
    },
    background: {
      default: '#ffffff',
      paper: '#f7f3ea',
    },
    text: {
      primary: '#272727',
      secondary: '#657077',
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: 'clamp(38px, 5vw, 72px)',
    },
    h2: {
      fontWeight: 900,
      fontSize: 'clamp(28px, 3vw, 46px)',
    },
    h3: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 700,
          padding: '12px 28px',
          minWidth: 180,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
})

export default theme