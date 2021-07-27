import React, { Component } from 'react';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos:[
        {id:1,text:"html",done:false}
      ]
    };
    // this.recover = this.recover.bind(this);
  }

  recover = (e) => {
    this.setState({
     value: e.target.value 
    })
  }

 add=(e)=>{
e.preventDefault()
  this.setState({
   todos:[...this.state.todos,{id:Math.random(),text:this.state.value,done:false}],value:""
  })
}

  delete = (x) => {
 
    this.setState({
     todos:this.state.todos.filter(el=>el.id !== x)

    })
  }
  done = (x) => {
    this.setState({
      todos:this.state.todos.map(el=>el.id === x ? {...el,done:!el.done}:el)
    })
  }


  render() {
    return (
    <body>

      <div className="login-box">
        <h2>challenge State</h2>
       
        <div className="user-box">
          <input value={this.state.value} type="text" onChange={this.recover} placeholder="Enter the word"/> 
          < button onClick={this.add} id="add"> ADD</button>
        </div>
       
          <ul>
            {
              this.state.todos.map((el,i)=>
            <li key={el.id}>
            <p style={{textDecoration:el.done && "line-through"}}>
              {el.text}</p>
           <button onClick={()=>this.delete(el.id)}>DELETE</button>
           <button onClick={()=>this.done(el.id)}>DONE</button>
              </li>)
            }
          </ul>
          </div>
       
        </body>






          /* <div >
           
             <input value={this.state.value} type="text" onChange={this.recover} /> 
             <button onClick={this.add}>ADD</button>
             </div>
             
          <div className="boxClickCss" >
            <ul>
              {
                this.state.todos.map((el,i)=>
                <li key={el.id}>

              <p style={{textDecoration:el.done && "line-through"}}>
                {el.text}</p>
              <button  onClick={()=>this.delete(el.id)}> DELETE</button>
              <button  onClick={()=>this.done(el.id)}> DONE</button>
                </li>)
              }
            </ul>
          </div> */
      
    );
  }
}


export default App
