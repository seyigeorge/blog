import React from 'react'
import './index.css';
import img from './img.png'
import axios from 'axios'
import history from './history'



class App extends React.Component {

  constructor(props) {
    super(props);
      this.addPost = this.addPost.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
      this.state = {
        name:'',
        content:'',
        description: 'The content of a textarea goes in the value attribute'
    };
  }


  handleNameChange(e){
    this.setState({name:e.target.value})
  }
  handleContentChange(e){
    this.setState({content:e.target.value})
  }

  
  
  addPost(){
    axios.post('/addPost', {
      name: this.state.name,
      content: this.state.content
    })

    .then(function (response) {
      console.log('response from add post is ', response);
      history.push('/');
    })

    .catch(function (error) {
      console.log(error);
    });
  }



  render() { 
    return (
      <div>
        <div>
           <img src={img} style={{width: '1300px'}} alt="" />
        </div>  
        <form className="form-group">
          <h2 className="form-heading">Create Post</h2>
             <div class="form-group">
                  <label for="inputName">Name:</label>
                  <input type="text" onChange={this.handleNameChange} class="form-control" id="inputName"/>
             </div>
             
             <div class="form-group">
                   <label for="inputContent">Content:</label>
                   <textarea class="form-control" rows="5" onChange={this.handleContentChange} id="inputContent"></textarea>
             </div>
             <button className="btn btn-lg btn-primary btn-block" onClick={this.addPost} type="button">Submit</button>
        </form>
        
      </div>

    );
  }
}



  

  

 



export default App;