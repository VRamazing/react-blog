import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan700,pink500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AllPosts from './AllPosts'
import NewPost from './NewPost'
import About from './About'
import AppHeader from './Header';


injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan700,
    accent1Color: pink500
  }
})



class App extends Component {
  render() {
    return (
      <div className="App">

        <MuiThemeProvider muiTheme = {muiTheme}>  
          <div>   
            <AppHeader />
            <Router>
              <div>
                <Route exact path="/" component={AllPosts} />
                <Route path="/about" component={About} />
                <Route path="/new" component={NewPost} />
              </div>
            </Router>
          </div>
        </MuiThemeProvider>
        

      </div>
    );
  }
}

export default App;
