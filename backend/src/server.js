import express from 'express'
import noteRoutes from './routes/noteRoutes.js'

const app = express()

app.use('/api/notes', noteRoutes)

app.listen(5005, () => {
  console.log('Server is listening on PORT 5005!!!')
})
