import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
				form: {textAlign: "left"},

				centeredDiv: {
					width: "60%",
					margin: "20px auto"
				},
				textField: {
					marginBottom: 25,
				},

				categories: {
					display: 'inline-block',
					width: '150px',
					marginBottom: 25,
					padding: 2,
				}
			}


class NewPost extends Component {
  constructor(){
  	super();
  	this.state = {
	    categories:[
	    	{selected: false, id: 1, name: 'Technology'},
	    	{selected: false, id: 2, name: 'Experiments'},
	    	{selected: false, id: 3, name: 'Memoir'},
	    	{selected: false, id: 4, name: 'Spiritual'},
	    	{selected: false, id: 5, name: 'LifeLessons'},
	    ],
	    title:'',
	    content: ''
  	};
  }
  

  
  updateText = e =>{
  	this.setState({
  	 [e.target.name]: e.target.value
  	});
  };

  changeSelection = id => {
    var state = this.state.categories.map((d) => {
    	
        return {
            id: d.id,
            selected: (d.id === id ? !d.selected : d.selected),
            name: d.name
        };
        
    });

    this.setState({ categories: state });

   };

   onSubmit(e){
   	 e.preventDefault();
   	 console.log(this.state);
   	 const myHeaders = new Headers({
					   	 	"Content-Type": "application/json",
					  		
					   	 });

   	 const myInit = {
   	 					method: 'POST',
   	 					headers: myHeaders,
   	 					body: JSON.stringify(this.state),
   	 				} 
   	 const myRequest = new Request('https://vue-blog-acfa7.firebaseio.com/posts.json',myInit);

   	 fetch(myRequest).then((res) => console.log(res))
   }
  

  render() {
  	const { categories } = this.state

    return (
      
      <div style = {styles.centeredDiv}>
      	  <br />
          <form style = {styles.form} className = "NewPost">
			

          	<TextField
          	  name= "title" 
          	  id= "title"
		      hintText="Enter Post Title"
		      floatingLabelText="Title"
		      fullWidth= {true} 
		      value= {this.state.title}
		      onChange= {e => this.updateText(e)}
		     /><br />

		    <TextField
		      hintText="Enter Post Content"
		      multiLine={true}
		      rows={4}
		      name= "content" 
		      id= "content"
		      floatingLabelText="Content"
		      fullWidth= {true}
		      style={styles.textField}
		      value= {this.state.content}
		      onChange = {e => this.updateText(e)}
		     /><br />



		     <div>
			    {categories.map((data, i) => 
	                <Checkbox
	                	key = {i}
					    label={data.name}
					    checked={data.selected}
					    onCheck={this.changeSelection.bind(this, i+1)}
					    style={styles.categories}
				    />
	            )}
		     </div>

             <RaisedButton label="Create Post" onClick = {(e)=>this.onSubmit(e)} secondary={true}  />
        </form>
      </div>
    );
  }
}




export default NewPost;

