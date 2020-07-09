import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './hello'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      hideClick : false
    };
     this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if(this.state.hideClick == true){
      this.setState({hideClick : false})
    } else if(this.state.hideClick == false){
      this.setState({hideClick : true})
    }
  }


  render() {
    return (
      <div>
        <form>

        <div style={{textAlign:"center"}}>
          <b>conditional rendering </b>
        </div>
        <br/>
        {
        this.state.hideClick 
        ?
          <Hello />
        :
        <div style={{ backgroundColor: "blue" , height: "100px" , width : "768px"}}/>
        }
         </form>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
