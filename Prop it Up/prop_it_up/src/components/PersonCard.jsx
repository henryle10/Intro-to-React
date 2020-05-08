import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
    }
    handleClick = () => {
        this.setState({
            age: this.state.age + 1
        });
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.HairColor}</p>
                <button onClick={this.handleClick}>Birthday Button for {this.props.firstName}</button>
            </div>
        );
    }
    // const PersonCard = (props) => {
    //     const state = {
    //         birthday: 0
    //     }
    //     const handleClick = () => {
    //         this.setState.birthday += 1
    //     }
    // }
}

export default PersonCard;