import React,{useEffect}from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles'
import {withStyles} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'
import Taskboard from '../Taskboard';
import theme from 'commons/Theme'
export default withStyles(styles)(function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <Taskboard/>
    </ThemeProvider>
  );
})
