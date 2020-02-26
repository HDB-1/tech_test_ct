import React from 'react'


export default function Overview(props) {
    return (
        <div>
            <p>showing overview component</p>
            <ul>
                {props.info.map((information, index) => <li key={index}>Name and Monthly Price: {information.name}, {information.expectedMonthlySpend}</li>)}
            </ul>
        </div>
    )
}

