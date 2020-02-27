import React from 'react'


export default function Overview(props) {
    return (
        <div>
            <p>showing overview component</p>
            <ul>
                {props.info.map((information, index) => <li key={index}>Name: {information.name}</li>)}
            </ul>
        </div>
    )
}

