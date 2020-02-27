import React, { Component } from 'react';
import Items from './Items';

export default class Overview extends Component {
    render() {
        return (
            <div>
                <p>showing overview component</p>
                <Items allInfo={this.props.allState} showFixed={this.props.showFixed} showVariable={this.props.showVariable}/>
            </div>
        )
    }
}
