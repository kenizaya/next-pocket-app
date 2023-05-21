import Link from 'next/link'
import React from 'react'
import CreateNote from './CreateNote'

const getNotes = async () => {
  const res = await fetch(
    'http://localhost:8090/api/collections/notes/records?page=1&perPage=30',
    { cache: 'no-store' }
  )
  const data = await res.json()
  return data?.items as any[]
}

const NotesPage = async () => {
  const notes = await getNotes()

  return (
    <div className='h-screen'>
      <h1>Notes</h1>
      <div className='w-[810px] max-w-full mx-auto my-3 flex gap-10 flex-wrap'>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />
        })}
      </div>
      <CreateNote />
    </div>
  )
}

export default NotesPage

const Note = ({ note }: { note: any }) => {
  const { id, title, content, created } = note || {}

  return (
    <Link href={`notes/${id}`}>
      <div className='w-max p-5 bg-yellow-300 rounded'>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  )
}
