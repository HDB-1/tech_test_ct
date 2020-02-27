import React, { Component } from 'react'
import Item from './Item';

export default class Items extends Component {
    render() {
        return (
            <div>
                <p>showing items component</p>
                <ul>
                    {this.props.allInfo.map((allInfo, index) => {
                        return <Item key={index} allInfo={allInfo}/>
                    })}
                </ul>

                {/* <Item allInfo={this.props.allInfo} /> */}
            </div>
        )
    }
}
