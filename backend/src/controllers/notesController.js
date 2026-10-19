export function getAllNotes(req, res) {
  res.status(200).send('You have got your notes!!')
}

export function createNote(req, res) {
  res.status(201).json({ message: 'Note is CREATED!' })
}

export function updateNote(req, res) {
  res.status(200).json({ message: 'Note UPDATED!' })
}

export function deleteNote(req, res) {
  res.status(200).json({ message: 'Note DELETED!' })
}
