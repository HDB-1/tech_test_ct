import React from 'react'

export default function Item(props) {
    const itemComp = {
        border: '2px solid black',
        margin: '5px'
    }
    return (
        <div style={itemComp}>
            <p>Name: {props.energyData.name}</p>
            <p>Monthly Expected Cost: £{props.energyData.expectedMonthlySpend}</p>
            <p>Expected Annual Saving: £{props.energyData.expectedAnnualSavings}</p>
            {/* {props.all.fixed ? <p>Tariff Type: Fixeddd!!</p> : <p>nope didnt work for fix</p>}
            {props.all.variable ? <p>Tariff Type: Variableee!!</p> : <p>nope didnt work for var</p>} */}
        </div>
    )
}
