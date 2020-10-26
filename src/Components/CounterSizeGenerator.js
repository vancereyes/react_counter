import React, { Component } from 'react';
import './CounterSizeGenerator.css';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            size: 0,
        };
    }

    onChange(event) {
        const value = event.target.value;
        this.setState(() => {
            return { size: value };
        }, () => this.props.onGenerate(value));
    }

    render() {
        return (
            <div>
                <label htmlFor="size">Generate Size
                <input
                        type="number"
                        name="size"
                        id="size"
                        value={this.state.size}
                        onChange={this.onChange} />
                </label>
                
            </div>
        );
    }
}

export default CounterSizeGenerator;