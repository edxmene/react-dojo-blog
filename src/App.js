import { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/navbar/NavBar";

const initialData = [
  { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
]

function App() {
  const [data,setData] = useState(initialData);
  return (
    <div className="container-sm">
      <NavBar />
      <Home data={data}/>
    </div>
  );
}

export default App;
