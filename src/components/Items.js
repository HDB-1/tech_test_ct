import React, { Component } from 'react'
import Item from './Item';

export default class Items extends Component {
    render() {
        return (
            <div>
                <p>showing items component</p>
                <Item allInfo={this.props.allInfo} />
            </div>
        )
    }
}
