import React, { Component } from 'react';
class InfoForm extends Component {
    state = {
        name: null,
        age: null,
        birthMonth: null
    }
    //in container component we use this.
    // in functional componenet we directly access props
    // here i am making a single function for state object(name,age,birthMonth) 
    handleChange = (e) => {
        this.setState({
            // /name: e.target.value
            //doubt
            [e.target.id]: e.target.value//this will fetch id=name from input
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //  console.log(this.state)
        //this.state is carrying current value and passing it to app.js
        this.props.addInfo(this.state)//i am accessing function(addInfo) through props   
    }
    // we are not using this.handleClick() beacuse it will automatically fires
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' onChange={this.handleChange} />
                <label htmlFor='age'>Age</label>
                <input type="text" id='age' onChange={this.handleChange} />
                <label htmlFor='birthMonth'>BirthMonth</label>
                <input type="text" id='birthMonth' onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        )
    }
}


export default InfoForm;

