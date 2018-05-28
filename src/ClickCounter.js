import React, { Component } from 'react';

class ClickCounter  extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count:0};
    }

    onClickButton() {
        this.setState({count: this.state.count + 1})
    }

    counterStyle() {
        return {margin: '30px'}
    }

    render() {
        return (
            <div style={this.counterStyle()}>
                <button onClick={this.onClickButton}>Click Here</button>
                <div>
                    Click Count: {this.state.count}
                </div>
            </div>
        );
    }
}

export default ClickCounter;