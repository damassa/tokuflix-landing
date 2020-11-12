import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Routes from './routes/routes';

import './styles/global.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#282069',
    },
    secondary: {
      main: '#9389dc',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
