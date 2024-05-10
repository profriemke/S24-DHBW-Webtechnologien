'use client'
import React from 'react'
import Link from 'next/link'

const Navigation = (props) => {
    console.log(props.page)
    return (
        <nav>

            <ul className="flex  flex-grow font-sans">
                <li className={props.page == "home" ? " bg-cyan-100 flex-grow p-2" : "text-white bg-cyan-500 flex-grow p-2"}><Link href="/">Home</Link></li>
                <li className={props.page == "notes" ? " bg-cyan-100 flex-grow p-2" : "text-white bg-cyan-500 flex-grow p-2"}><Link href="/notes">Notes</Link></li>
                <li className={props.page == "about" ? " bg-cyan-100 flex-grow p-2" : "text-white bg-cyan-500 flex-grow p-2"}><Link href="/about">About</Link></li>
            </ul>

        </nav>
    )
}

export default Navigation