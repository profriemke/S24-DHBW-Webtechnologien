import React from 'react'

const Note = (props) => {
    return (
        <div className="font-sans bg-yellow-300 w-40 h-40 m-4 p-2 rounded shadow-lg   ">{props.text}</div>
    )
}

export default Note