import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme  from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme  from 'material-ui/styles/getMuiTheme'
import React  from 'react'
import ReactDOM  from 'react-dom'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import App  from './App'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const ThemeThing = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <ThemeThing />,
  document.getElementById('root')
);
