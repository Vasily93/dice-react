import React, {Component} from 'react';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        numArr: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = {
            die1: 'four',
            die2: 'four',
        }
    }
    roll = () => {
        const rand = () => {
            return Math.floor(Math.random() * 6)
        }
        this.setState({
            die1: this.props.numArr[rand()],
            die2: this.props.numArr[rand()]
        })
    }

    render() {
        return (
            <div>
                <Die num={this.state.die1}/>
                <Die num={this.state.die2}/>
                <p>
                      <button onClick={this.roll}>Roll Dice!</button>
                </p>
            </div>
        )
    }
}

export default RollDice;