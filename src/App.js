import React, {Component} from 'react';
import Clock from './Clock';

export default class App extends Component {

    clocksRef = new Map();
    clockIds = [1, 2, 3];

    state = {
        selectedClock: 1,
    }

    get currentClock() {
        return this.clocksRef.get(this.state.selectedClock);
    }

    selectClock(value) {
        this.setState({
            selectedClock: parseInt(value, 10)
        })
    }

    play() {
        this.currentClock.play()
    }

    stop() {
        this.currentClock.stop()
    }

    render() {
        return (
            <div>
                <button onClick={() => this.stop()}>stop</button>
                <button onClick={() => this.play()}>start</button>
                <select onChange={event => this.selectClock(event.target.value)}>
                    {
                        this.clockIds.map((id) =>
                            <option value={id} key={id}> {`Clock ${id}`}</option>)
                    }
                </select>
                <div>
                    {
                        this.clockIds.map((id) =>
                            <Clock key={id} ref={(ref) => this.clocksRef.set(id, ref)}/>)
                    }
                </div>
            </div>
        )
    }
}

