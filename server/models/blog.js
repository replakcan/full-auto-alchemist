import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const blogSchema = new Schema({
  _id: Schema.Types.UUID,
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog
