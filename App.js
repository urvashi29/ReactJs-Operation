import React, { Component } from 'react';
import Display from './Display';
import InfoForm from './InfoForm';
class App extends Component {
  //displayInfos is an array and is carrying data 
  state = {
    displayInfos: [//array of objects //we are making an object so that we don't have to make (Display,Display...) again 'n' again
      { name: 'john', age: 27, birthMonth: 'may', id: 1 },//state of application
      { name: 'Wick', age: 30, birthMonth: 'june', id: 2 },
      { name: 'Richard', age: 32, birthMonth: 'july', id: 3 }
    ]
  }

  addInfo = (info) => {//info will carry all we have in states
    info.id = Math.random()
    //spread operator is capturing and putting my data in a new array structure  
    let displayInfos = [...this.state.displayInfos, info]//... this is a spread operator 
    //this will give me new array
    this.setState({
      displayInfos: displayInfos
    })
  }

  deleteInfo = (id, e) => {
    //this.state.displayInfo is just making a reference and we need  a copy of displayInfo of so we will use object.assign  
    const deleteInfo = Object.assign([], this.state.displayInfo);
    deleteInfo.splice(id, 1)
    // // console.log(deleteInfo)
    this.setState({
      deleteInfo: deleteInfo
    })
    // /console.log(deleteInfo)
  }
  render() {
    return (
      <div className='App'>
        <h1>This is my  App</h1>
        {/* <Display name='John' age='26' birthMonth='July' /> */}
        <Display displayInfos={this.state.displayInfos} deleteInfo={this.deleteInfo} />
        {/* <Display name='John' age='26' birthMonth='July' /> */}
        <InfoForm addInfo={this.addInfo} />
        {/* <statelessDisplay deleteInfo={this.deleteInfo} /> */}
      </div>
    );
  }
}


export default App;

