import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


//import Routes from './routes';

import './styles/global.css';

const theme = createMuiTheme({
  palette: {
      secondary: {
          main: '#240649'
      }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
