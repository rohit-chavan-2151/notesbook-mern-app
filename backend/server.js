const express = require('express')

const app = express()

app.get('/api/notes', (req, res) => {
  res.send('You have got 11 notes!')
})

app.listen(5005, () => {
  console.log('Server has started!')
})
