import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard';
import theme from 'commons/Theme';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
const store = configureStore();
export default withStyles(styles)(function App(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalLoading />
        <Taskboard />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
});
