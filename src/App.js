import Home from "./components/Home";
import NavBar from "./components/navbar/NavBar";
import useFetch from "./customHooks/useFetch";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Creater from "./components/Creater";
import BlogDetails from "./components/BlogDetails";


function App() {

  const {data:blogs,isLoading,errorLoading} = useFetch("http://localhost:8000/blogs");

  // const deleteBlog = (blogID) => {
  //   const newBlog = data.filter((blog)=>blog.id !== blogID);
  //   setBlogs(newBlog);
  // }

  return (
    <Router>
      <div className="container-sm">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home blogs={blogs} isLoading={isLoading} errorLoading={errorLoading}/>
          </Route>
          <Route path="/create">
            <Creater/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
