import express from 'express'
import cors from 'cors'
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

export default app
