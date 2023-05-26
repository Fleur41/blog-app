import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'
import Post from './Post'

const Posts = () => {
  const [blogs, setBlogs] = useState([])
  const [records, setRecords] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(res => {
      setBlogs(res.data.products)
      setRecords(res.data.products)
    })
    .catch(err => console.log(err))
    // fetch("https://dummyjson.com/products")
    // .then(res => res.json())
    // .then(res => {
    //   console.log(res)
    //   setBlogs(res.products)
    //   setRecords(res.products)
    // })
  }, [])
  const getInputData = (event) => {
    setBlogs(records.filter(r => r.title.toLowerCase().includes(event.target.value.toLowerCase())))
  }
  
  return (
    <div className='posts'>
        <div className='search-container'>
            <input type='text' placeholder='search' onChange={getInputData}className='search-input'></input>
        </div>

        <div className='blog-icon'>
          <h3>Blogs</h3>
          <i className='fa fa-calculator'></i>
        </div>

        <div className='posts-container'>
          {blogs.map((blog) => {
            <Post blog={blog} key={blog.id} /> 
          })}
        </div>
    </div>
    
    
  )
}

export default Posts