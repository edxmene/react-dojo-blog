import React from 'react'
import './BlogList.css'

const BlogList = ({blogs,title,deleteBlog}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {blogs.map(blog => ( 
                    <div key={blog.id} className="blog-list">
                        <h2 className="fs-4">{blog.title}</h2>
                        <p>Witten by user number {blog.userId}</p>
                        <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteBlog(blog.id)}>Delete Blog</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default BlogList
