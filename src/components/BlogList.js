import React from 'react'

const BlogList = ({data,title}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {data.map(blog => ( 
                    <div key={blog.id}>
                        <h2 className="fs-4">{blog.title}</h2>
                        <p>Witten by {blog.author}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default BlogList
