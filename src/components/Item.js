import React from 'react'

export default function Item(props) {
    return (
        <div>
            <p>showing iitem component</p>
            <ul>
                {props.allInfo.map((allInfo, index) => <li key={index}>Name = {allInfo.name}</li>)}
            </ul>
            
        </div>
    )
}
