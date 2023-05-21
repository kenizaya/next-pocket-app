const getNote = async (noteId: string) => {
  const res = await fetch(
    `http://localhost:8090/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } }
  )
  const data = await res.json()
  return data
}

const NotePage = async ({ params }: { params: any }) => {
  const note = await getNote(params.id)
  const { title, content, created } = note || {}

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className='w-max p-5 bg-yellow-300 rounded'>
        <h3>{title}</h3>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </div>
  )
}

export default NotePage
