const express = require('express')

const app = express()

app.get('/api/notes', (req, res) => {
  res.send('You have got 7 notes!')
})

app.post('/api/notes', (req, res) => {
  res.status(201).json({ message: 'Note CREATED!' })
})

app.put('/api/notes/:id', (req, res) => {
  res.status(200).json({ message: 'Note UPDATED!' })
})

app.delete('/api/notes/:id', (req, res) => {
  res.status(200).json({ message: 'Note DELETED!' })
})

app.listen(5005, () => {
  console.log('Server is listening on PORT 5005!!!')
})
