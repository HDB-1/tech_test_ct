import React from 'react'

export default function Item(props) {
    return (
        <div>
            <p>name = {props.allInfo.name}</p>
            <p>cost = {props.allInfo.expectedAnnualSpend}</p>
        </div>
    )
}
