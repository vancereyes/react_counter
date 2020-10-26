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
                    <p>Sum of all counters value is : {sum}</p>
                </section>

            </div>
        );
    }
}

export default CounterGroupSum;