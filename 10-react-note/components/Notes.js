import React from 'react'
import Note from "@/components/Note"

const Notes = () => {
    let notes = ['essen', 'trinken', 'schlafen']
    return (
        <div className='flex flex-wrap'>
            {
                notes.map((note) => { return <Note text={note} /> })
            }
        </div>
    )
}

export default Notes