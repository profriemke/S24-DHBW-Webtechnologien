'use client'
import { React, useState } from 'react'

const Zaehler = () => {
    const [zaehler, setZaehler] = useState(0)
    return (
        <div>
            <p>{zaehler}</p>
            <button onClick={()=>setZaehler(zaehler+1)}>Erhöhen</button>
        </div>
    )
}

export default Zaehler