import express from 'express'
import cors from 'cors'
import { connectDB } from './db/conn.js'
import blogRouter from './routes/blog.js'
import indexRouter from './routes/index.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', indexRouter)
app.use('/blogs', blogRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

async function startServer() {
  await connectDB()

  app.listen(3001, () => {
    console.log('Example app listening on port 3001!')
  })
}

startServer()
