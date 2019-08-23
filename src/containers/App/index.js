import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard';
import theme from 'commons/Theme';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';
const store = configureStore();
export default withStyles(styles)(function App(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    </Provider>
  );
});
