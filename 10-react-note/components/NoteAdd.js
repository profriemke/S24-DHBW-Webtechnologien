'use client'
import { useState } from 'react'

const NoteAdd = (props) => {
    const [addState, setAddState] = useState(false)
    const [note, setNote] = useState('')

    const handleNote = (e) => {
        console.log(e.target.value)
        setNote(e.target.value)
    }
    const noteSubmit = () => {
        props.addNote(note)
        setAddState(false)
    }

    if (addState) {
        return (
            <p>
                <input onChange={handleNote} className="border-2 rounded-md" type="text" />
                <button onClick={noteSubmit} className="rounded-md bg-sky-600 p-2">eintragen</button>
            </p>
        )
    } else {
        return (

            <div onClick={() => { setAddState(true) }} className="cursor-pointer m-7 bg-sky-600 w-10 h-10 text-white font-extrabold text-center rounded-full shadow-lg">+</div>
        )
    }
}

export default NoteAdd