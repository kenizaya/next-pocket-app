'use client'
import { useState } from 'react'

const CreateNote = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const create = async () => {
    await fetch('http://localhost:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })

    setTitle('')
    setContent('')
  }
  return (
    <form
      onSubmit={create}
      className='border border-1 border-gray-200 w-max p-5 rounded'
    >
      <h3>Create a new Note</h3>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className='bg-gray-500 px-5 py-2 rounded' type='submit'>
        Create Note
      </button>
    </form>
  )
}

export default CreateNote
