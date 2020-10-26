import React, { Component } from 'react';

class CounterGroupSum extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const sum = this.props.sum;
        return (
            <div>
                <section>
                    <p>sum of all counters value is <mark>{sum}</mark></p>
                </section>

            </div>
        );
    }
}

export default CounterGroupSum;