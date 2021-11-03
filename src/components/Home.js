import React from 'react'
import BlogList from './BlogList'

const Home = ({data}) => {
    return (
        <div>
            <BlogList data={data} title="All Blogs"/>
            <BlogList data={data.filter((blog)=>blog.author === 'Mario')} title="Mario's Blog"/>
        </div>
    )
}

export default Home
