import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/navbar/NavBar";

const initialData = [
  { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
]

function App() {
  const [blogs,setBlogs] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    getBlogs();
  },[])

  // const getBlogs = async () => {
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   const res = await fetch(url);
  //   const blogs = await res.json();
  //   setIsLoading(false);
  //   setBlogs(blogs);
  // }

  const getBlogs = async () => {
    const url = 'http://localhost:8000/blogs';
    const res = await fetch(url);
    const blogs = await res.json();
    setIsLoading(false);
    setBlogs(blogs);
  }

  const deleteBlog = (blogID) => {
    const newBlog = blogs.filter((blog)=>blog.id !== blogID);
    setBlogs(newBlog);
  }

  return (
    <div className="container-sm">
      <NavBar />
      <Home blogs={blogs} deleteBlog={deleteBlog} isLoading={isLoading}/>
    </div>
  )
}

export default App;
