import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

class AllPosts extends Component {
  constructor(){
      super();
      this.state = {
        loading:  false,
        posts: [],
        message: {
          'title': 'Welcome to my Blog',
          'description': 'I write about technology, life experiences and spirituality.',
          'src': 'default.png'
        } 
      }
     ;


  };



  componentDidMount(){
      this.setState({loading: true})
      fetch('https://vue-blog-acfa7.firebaseio.com/posts.json').then(
        (data) => data.json()).then(
        (data) => {
             console.log(data)
             var postsArray = [];
                for(let key in data){
                  data[key].id = key;
                  postsArray.push(data[key]);
                }
                
            this.setState({loading: false,posts : postsArray})        
      })
  };

  render() {
      const { posts,loading } = this.state
      return (
        	<div className="App">
            <Jumbotron message = {this.state.message}/>
            <br /><br />
            <div className="cards">

                <div>
                  {(loading) ? 
                      <span>Loading...</span>:
                      <span>{posts.length} Posts</span>
                  }
                
                  {(posts.length) ? 
                      posts.map((data, i) => 
                          <Card className ="card"  key= {i}>
                            <br />
                            <CardText>
                              <h3 style={{color:"#474747"}}>{data.title}</h3>
                              <p>{data.content}</p>
                            </CardText>
                            <CardActions>
                              <FlatButton primary label="Read More" />
                              </CardActions>
                          </Card>  
                    ) :
                      <span style = {{ marginTop: 5}}><br />Currently No Posts</span>
                  }
                </div>
            </div>
  	    </div>
      )
  }
}

export default AllPosts;