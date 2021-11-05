import React from 'react'
import { Link } from 'react-router-dom'
import './BlogList.css'

const BlogList = ({blogs,title}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {blogs.map(blog => ( 
                    <div key={blog.id} className="blog-list">
                        <h2 className="fs-4">{blog.title}</h2>
                        <p>Witten by user {blog.author}</p>
                        <Link to={`/blogs/${blog.id}`}>
                            <button type="button" className="btn btn-info btn-sm">Blog Details</button>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default BlogList
