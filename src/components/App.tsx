import * as React from 'react';

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handler = this.handler.bind(this);
    }

    handler(input: any) {
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