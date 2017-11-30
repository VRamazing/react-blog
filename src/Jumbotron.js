import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <header className="App-header" >
            <h1 className="App-title">{this.props.message.title}</h1>  
            <p className="App-description"><em>{this.props.message.description}</em></p>
            <img src = {this.props.message.src} alt = "profilePic" className="profile-pic" />
                 
                      
        </header>
      </div>
    );
  }
}

export default Jumbotron;
