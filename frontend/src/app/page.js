'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/blogs').then((response) => {
      console.log(response.data)
      setBlogs(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}
