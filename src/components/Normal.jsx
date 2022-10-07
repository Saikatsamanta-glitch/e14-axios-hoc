import React, { Component, PureComponent } from 'react'
// API
export default class Normal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidUpdate() {
        console.log("updated");
    }
    componentDidMount() {
        console.log(' mounted ');
    }
    render() {

        return (
            <div className='center'>
                <h1> {this.data} Counter  : {this.state.count} </h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}> Counter + </button>
            </div>
        )
    }
}
