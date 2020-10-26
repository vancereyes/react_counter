import React, { Component } from 'react';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroup from './CounterGroup';
import CounterGroupSum from './CounterGroupSum';

class MultiCounter extends Component {

    constructor(props) {
        super(props);

        this.onGenerate = this.onGenerate.bind(this);
        this.onSum = this.onSum.bind(this);
        this.state = { size: 0, sum: 0 };
    }


    onGenerate(size) {
        this.setState({ size })
    }
    onSum(valueAdded) {
        this.setState(prevState => ({ sum: prevState.sum + valueAdded }))
    }

    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGenerator onGenerate={this.onGenerate} />
                    <CounterGroupSum sum={this.state.sum} />
                </fieldset>
                <CounterGroup size={this.state.size} onSum={this.onSum} />
            </div>
        );
    }
}

export default MultiCounter;