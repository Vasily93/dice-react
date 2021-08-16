import React, {Component} from 'react';
import './Die.css';

class Die extends Component { 
    render() {
        let dieStyle = `Die fas fa-dice-${this.props.num}`
        return (
            <i className={dieStyle}></i>
        )
    }
}

export default Die;