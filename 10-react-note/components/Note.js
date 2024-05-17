import React from 'react'

const Note = (props) => {
    return (
        <p className="font-sans bg-yellow-300 w-40 h-40 m-4 p-2 rounded shadow-lg">
            <button
                className="font-sans text-xs bg-red-300 w-5 h-5  rounded-xl shadow-lg"
                onClick={() => props.deleteNote(props.id)}>X</button>
            <br />
            {props.text}
        </p>
    )
}

export default Note