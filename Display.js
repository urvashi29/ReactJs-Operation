import React, { Component } from 'react';
//class is a container componenet
class Display extends Component {
    render() {
        const displayInfos = this.props.displayInfos; //it saves the list in the component 
        //creating a new array 
        //map will transform values into structure of UI/display component

        const displayList = displayInfos.map((info, id) => { //it returns a new array with particular functionality
            return (
                <div key={info.id}> {/*if someone delete john then for updation info we use unique key  */}
                    <h1> This is {info.name} Display Componenet</h1>
                    <div>Name: {info.name}</div>
                    <div>Age:  {info.age}</div>
                    <div>Birth-month: {info.birthMonth}</div>
                    <button onClick={this.props.deleteInfo.bind(this, info.id)}>Delete</button>
                </div>
            )
        }
        );
        //console.log(displayList)
        //   condition ? (this value if true): (return this false)  tenery operator 
        //console.log(displayList);
        return (
            <div>
                {displayList}
            </div>

        );

    }
}
export default Display;

//doubts:
// is it compulsory for map tag to return something