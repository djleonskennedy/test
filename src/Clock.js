import React, {Component} from 'react';

const DEFAULT_TICK = 50;

export default class Clock extends Component {
    timerId;

    state = {
        time: Date.now(),
    }

    componentDidMount() {
        this.play();
    }

    play() {
        this.timerId = setInterval(() =>
            this.setState({time: Date.now()}
            ), DEFAULT_TICK)
    }

    stop() {
        clearInterval(this.timerId)
    }

    componentWillUnmount() {
        this.stop();
    }

    transformTime(time) {
        const t = new Date(time)
        return `${t.toLocaleTimeString()} : ${t.getMilliseconds()}`
    }

    render() {
        return <h1>{this.transformTime(this.state.time)}</h1>
    }
}