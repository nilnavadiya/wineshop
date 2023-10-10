import React from 'react'
import Blogs from '../Component/Pages/Blog/Blogs'
import BlogSection from '../Component/Pages/Blog/BlogSection'

const Blog = () => {
  return (
    <div>
      <BlogSection title={'Blog'} />
      <Blogs />
    </div>
  )
}

export default Blog