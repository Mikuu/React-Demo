import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initialValue
        }
    }

    onClickIncrementButton() {
        this.setState({count: this.state.count + 1});
        this.props.onUpdate(1);
    }

    onClickDecrementButton() {
        this.setState({count: this.state.count - 1});
        this.props.onUpdate(-1);
    }

    counterStyle() {
        return {margin: '10px'}
    }

    buttonStyle = {
        margin: '20px'
    }

    render() {
        return (
            <div style={this.counterStyle()}>
                <button style={this.buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={this.buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{this.props.caption} Count: {this.state.count}</span>
            </div>
        );
    }
}

class ControlPanel extends Component {
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
        this.initialValue = [100, 115, 130];

        const initialSum = this.initialValue.reduce((a,b) => a+b, 0);

        this.state = {
            sum: initialSum
        }
    }



    controlPanelStyle = {
        margin: '20px'
    }

    onUpdate(changeValue) {
        this.setState({sum: this.state.sum + changeValue})
    }

    render() {
        return (
            <div style={this.controlPanelStyle}>
                <Counter onUpdate={this.onUpdate} caption="Nanoha" initialValue={this.initialValue[0]} />
                <Counter onUpdate={this.onUpdate} caption="Fate" initialValue={this.initialValue[1]} />
                <Counter onUpdate={this.onUpdate} caption="Hayate" initialValue={this.initialValue[2]} />
                <div style={this.controlPanelStyle}> Total Count: {this.state.sum}</div>
            </div>
        )
    }
}


Counter.defaultProps = {
    initialValue: 0,
    onUpdate: f => f
};

export default ControlPanel;