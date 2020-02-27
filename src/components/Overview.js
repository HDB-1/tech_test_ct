import React, { Component } from 'react';
import Items from './Items';

export default class Overview extends Component {
    render() {
        return (
            <div>
                <p>showing overview component</p>
                <Items allInfo={this.props.info} />
            </div>
        )
    }
}
