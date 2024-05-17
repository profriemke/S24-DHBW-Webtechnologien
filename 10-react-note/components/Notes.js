import { useState, useEffect } from 'react'
import Note from "@/components/Note"
import NoteAdd from "@/components/NoteAdd"

const Notes = () => {
    const [notes, setNotes] = useState([])

    const addNote = async (note) => {
        const res = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 0, text: note })
        })
        console.log(res)
        if (res.ok) {
            console.log('Note hinzugefügt')
            const data = await res.json()

            console.log(data)
            setNotes([...notes, data])
        } else {
            console.log('Fehler')
        }

    }
    const deleteNote = async (id) => {
        const res = await fetch('/api/notes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        console.log(res)
        if (res.ok) {
            console.log('Note gelöscht')
            const data = await res.json()
            console.log(data)
            setNotes(notes.filter((note) => note.id !== id))
        } else {
            console.log('Fehler')
        }

    }
    useEffect(() => {
        fetch('/api/notes')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setNotes(data)
            })
    }, [])
    return (
        <div>
            <div className='flex flex-wrap'>
                {
                    notes.map((note) => { return <Note key={note.id} deleteNote={deleteNote} id={note.id} text={note.text} status={note.state} /> })
                }
            </div>
            <p><NoteAdd addNote={addNote} /></p>
        </div>
    )
}

export default Notes