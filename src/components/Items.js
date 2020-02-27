import React, { Component } from 'react'
import Item from './Item';

export default class Items extends Component {

    render() {
        return (
            <div>
                <p>showing items component</p>
                <button onClick={this.props.showFixed}>Show Fixed</button>
                <button onClick={this.props.showVariable}>Show Variable</button>
                {/* <button onClick={this.props.showVariable()}>Show Variable</button> */}
                <ul>
                    {this.props.allInfo.data.map((allInfo, index) => {
                        return <Item key={index} allInfo={allInfo}/>
                    })}
                </ul>
            </div>
        )
    }
}
