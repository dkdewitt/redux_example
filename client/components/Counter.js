import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import * as CounterActions from '../actions/Counter';
import { bindActionCreators } from 'redux';




@connect(state => ({
    counter: state.counter
}))
export default class CounterApp extends Component {
    render() {
        const { counter, dispatch } = this.props;
        console.log(this);
        return (
            <Counter counter={counter}
                     {...bindActionCreators(CounterActions, dispatch)} />
        );
    }
}


class Counter extends Component {
    static PropTypes = {
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired
    };

    render() {
        const { increment, decrement, counter } = this.props;
        console.log(this);
        return (
            <p>
                CLicked: {counter} times.
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </p>
        );
    }
}


export default CounterApp;
