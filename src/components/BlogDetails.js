import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../customHooks/useFetch';
import Error from './Error';
import Spinner from './spiner/Spiner';



const BlogDetails = () => {
    
    const {id} = useParams();
    const url = `http://localhost:8000/blogs/${id}`;
    const {data:blog,isLoading,errorLoading} = useFetch(url);
    return (
        <div>
            {errorLoading && <Error error={"Error loading blogs"}/>}
            {isLoading && <Spinner />}
            {blog && (
            <article>
                <title className="d-flex align-items-center justify-content-between">
                    <h4>{blog.title}</h4>  <h6 className="text-muted">By {blog.author}</h6>
                </title>
                <p>{blog.body}</p>
            </article> 
            )}
        </div>
    )
}

export default BlogDetails
