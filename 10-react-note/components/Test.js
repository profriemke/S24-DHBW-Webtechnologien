'use client'
import React from 'react'

const Test = (props) => {
    return (
        <div>
            <button onClick={() => { props.notification('Nachricht von Test') }} >Notifiction</button>

        </div>
    )
}

export default Test