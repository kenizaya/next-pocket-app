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
