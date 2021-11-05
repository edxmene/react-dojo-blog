import React from 'react'
import BlogList from './BlogList/BlogList'
import Error from './Error'
import Spiner from './spiner/Spiner'


const Home = ({blogs,isLoading, errorLoading}) => {
    return (
        <div>
            {errorLoading && <Error error={"Error loading blogs"}/>}
            {isLoading && <Spiner />}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    )
}

export default Home
