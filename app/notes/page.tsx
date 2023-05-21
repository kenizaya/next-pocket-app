import Link from 'next/link'
import React from 'react'

const getNotes = async () => {
  const res = await fetch(
    'http://localhost:8090/api/collections/notes/records?page=1&perPage=30'
  )
  const data = await res.json()
  return data?.items as any[]
}

const NotesPage = async () => {
  const notes = await getNotes()

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note._id} note={note} />
        })}
      </div>
    </div>
  )
}

export default NotesPage

const Note = ({ note }: { note: any }) => {
  const { id, title, content, created } = note || {}

  return (
    <Link href={note.id}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  )
}
