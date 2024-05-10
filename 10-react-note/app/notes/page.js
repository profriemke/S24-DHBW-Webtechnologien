'use client'
import React from 'react'
import Notes from "@/components/Notes"
import Navigation from '@/components/Navigation'

const NotePage = () => {
    return (
        <main>
            <Navigation page="notes" />
            <Notes />
        </main>
    )
}

export default NotePage