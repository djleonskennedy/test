import React, {Component} from 'react';
import Clock from './clock';

export default class App extends Component {
    state = {
        selectedClock: 1,
        clocks: [
            {
                id: 1,
                name: 'clock1',
                test: false
            },
            {
                id: 2,
                name: 'clock2',
                test: false
            }
        ],

    }

    selectClock(value) {
        this.setState({
            selectedClock: +value
        })
    }

    controlTime(stop = false) {
        const item = this.state.clocks.find(({id}) => id === this.state.selectedClock)
        const itemIndex = this.state.clocks.findIndex(({id}) => id === item.id)
        let newClocks = this.state.clocks;
        console.log(itemIndex)
        newClocks[itemIndex].test = stop ? true : false;
        this.setState({
            clocks: newClocks
        })

    }

    render() {
        return (
            <div>
                <button onClick={() => this.controlTime(true)}>stop</button>
                <button onClick={() => this.controlTime()}>start</button>
                <select onChange={event => this.selectClock(+event.target.value)}>
                    {
                        this.state.clocks.map(({name, id}) => {
                            return <option value={id} key={id}> {name}</option>
                        })
                    }
                </select>
                <div>
                    {
                        this.state.clocks.map(({id, test}) => {
                            return (
                                <div key={id}>
                                    <Clock test={test}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

