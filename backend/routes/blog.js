import { Router } from 'express'
import Blog from '../models/blog.js'

const blogRouter = Router()

blogRouter.get('/', async (req, res) => {
  const blogs = await Blog.find()

  res.json(blogs)
})

export default blogRouter
