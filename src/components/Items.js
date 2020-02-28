import React, { Component } from 'react'
import Item from './Item';

export default class Items extends Component {

    render() {
        let energyData = this.props.allState.data
        let fixed = this.props.allState.fixed
        let variable = this.props.allState.variable
        return (
            <div>
                <p>showing items component</p>
                <button id="fixedBtn" onClick={this.props.showFixed}>Show Fixed</button>
                <button id="varBtn" onClick={this.props.showVariable}>Show Variable</button>
                <ul>
                    {/* {console.log(energyData)} */}
                    {energyData.map((energyData, index) => {
                        return <Item key={index} energyData={energyData} fixed={fixed} variable={variable}/>
                    })}

                </ul>
            </div>
        )
    }
}
