import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handler = this.handler.bind(this);
    }

    handler(input) {
        this.setState({
            inputValue: input
        });
    }

    render() {
        const { inputValue } = this.state;

        return (
            <div>
                <input onChange={e => this.handler(e.target.value)} />
                <div>{inputValue}</div>
                <div>{inputValue}</div>
            </div>
        )
    }
}