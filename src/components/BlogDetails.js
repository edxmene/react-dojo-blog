import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../customHooks/useFetch';



const BlogDetails = () => {
    
    const {id} = useParams();
    const url = `http://localhost:8000/blogs/${id}`;
    const {data:blog} = useFetch(url);
    return (
        <div>
            {
            blog 
            &&
            <div>
                <title className="d-flex align-items-center justify-content-between">
                    <h4>{blog.title}</h4>  <h6 className="text-muted">By {blog.author}</h6>
                </title>
                <p>{blog.body}</p>
            </div> 
            }
        </div>
    )
}

export default BlogDetails
