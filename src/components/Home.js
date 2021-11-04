import React from 'react'
import BlogList from './BlogList/BlogList'

const Home = ({blogs,deleteBlog}) => {
    return (
        <div>
            <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>
        </div>
    )
}

export default Home
