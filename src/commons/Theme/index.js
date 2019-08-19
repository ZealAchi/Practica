import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#d32f2f',
    secondary: '#00bcd3',
    error: '#e64a19',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    background: '#7b1fa2',
    textColor: '#ffffff',
    boderColor: '#cccccc',
  },
});
export default theme;
