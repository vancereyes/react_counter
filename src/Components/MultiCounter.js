import React, { Component } from 'react';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroup from './CounterGroup';
import CounterGroupSum from './CounterGroupSum';
import './MultiCounter.css';

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
            <div id = "componentSum">
                <div class= "component-size-sum">
                <CounterSizeGenerator onGenerate={this.onGenerate} />
                <CounterGroupSum sum={this.state.sum} />
                </div>
                <div class="component-group-counter">
                <CounterGroup size={this.state.size} onSum={this.onSum} />
                </div>
            </div>
        );
    }
}

export default MultiCounter;