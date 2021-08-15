import React, {Component} from 'react';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            die1: 'four',
            die2: 'four',
            numArr: ['one', 'two', 'three', 'four', 'five', 'six']
        }
    }
    roll = () => {
        const rand = () => {
            return Math.floor(Math.random() * this.props.max)
        }
        this.setState({
            die1: this.state.numArr[rand()],
            die2: this.state.numArr[rand()]
        })
    }

    render() {
        return (
            <div>
                <Die num={this.state.die1}/>
                <Die num={this.state.die2}/>
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;