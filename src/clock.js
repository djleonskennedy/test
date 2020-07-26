import React from 'react';

export default class Clock extends React.Component {


    state = {
        time: Date.now(),
        stop: false
    }
    timer;

    componentDidMount() {
        this.setTimeInterval();
    }

    componentDidUpdate(prevProps) {
        if (this.props.test !== prevProps.test) {
            this.setState({stop: this.props.test})
            if (!this.state.stop) {
                this.setTimeInterval();
            }
        }
    }

    setTimeInterval() {
        return this.timer = setInterval(() => {
            if (this.state.stop) {
                clearInterval(this.timer);
            } else {
                this.setState(
                    {
                        time: Date.now()
                    }
                )
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    transformTime(time) {
        return new Date(time).toLocaleTimeString()
    }

    render() {
        return (
            <>
                <h1>{this.transformTime(this.state.time)}</h1>
            </>
        )
    }
}