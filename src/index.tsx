import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { pink } from '@material-ui/core/colors';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#2196F3',
  //   },
  //   secondary: {
  //     main: '#EF5350',
  //   },
  // },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
