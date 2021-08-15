import React, {Component} from 'react';

class Die extends Component { 
    render() {
        let dieStyle = `fas fa-dice-${this.props.num}`
        return (
            <div>
                <i className={dieStyle}></i>
            </div>
        )
    }
}

export default Die;