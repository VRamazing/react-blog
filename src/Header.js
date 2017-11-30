import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter as Router} from 'react-router-dom'




class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      
      <div>
        <AppBar
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Router>
            <div>
              <MenuItem onClick={this.handleClose} href="/">All Posts</MenuItem>
              <MenuItem onClick={this.handleClose} href="/new">Create New Post</MenuItem>
              <MenuItem onClick={this.handleClose} href="/about">About Author</MenuItem>
            </div>
          </Router>
        </Drawer>        
      </div>
    );
  }
}

export default AppHeader;
