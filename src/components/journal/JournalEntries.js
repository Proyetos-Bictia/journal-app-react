import React from 'react'
import { JournalEntry } from './JournalEntry'
import { useSelector } from 'react-redux'

export const Journalentries = () => {
    const { notes } = useSelector(state => state.notes);
    // const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <div className="journal__entries">
            {
                notes.map(note => {
                    return (
                        <JournalEntry
                            key={note.id}
                            {...note}
                        />
                    )
                })
            }
        </div>
    )
}
