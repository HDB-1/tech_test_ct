import React from 'react'

export default function Item(props) {
    const itemComp = {
        border: '2px solid black',
        margin: '5px'
    }
    return (
        <div style={itemComp}>
            <p>Name: {props.allInfo.name}</p>
            <p>Monthly Expected Cost: £{props.allInfo.expectedMonthlySpend}</p>
            <p>Expected Annual Saving: £{props.allInfo.expectedAnnualSavings}</p>
            {/* {props. ? "show fixed ones" : "no state for fixed yet"} */}
        </div>
    )
}
