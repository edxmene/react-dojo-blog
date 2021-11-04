import React from 'react'
import BlogList from './BlogList/BlogList'
import Spiner from './spiner/Spiner'


const Home = ({blogs,deleteBlog,isLoading}) => {
    return (
        <div>
            {isLoading && <Spiner />}
            {blogs && <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>}
        </div>
    )
}

export default Home
