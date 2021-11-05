import { useState, useEffect } from 'react';

const getBlogs = async (url, abortCont) => {
    const res = await fetch(url,{signal:abortCont.signal});
    if(!res.ok){
      const {url,status, statusText} = res;
      throw Error(`${status} ${statusText} in fetch ${url}`);
    }
    const blogs = await res.json();
    return blogs;
}

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [errorLoading,setErrorLoading] = useState(false);

    useEffect(()=>{
        console.log('Calling useEffect from custom hook useFetch');
        const abortCont = new AbortController();
        getBlogs(url,abortCont)
        .then((blogs)=>{
            setIsLoading(false);
            setErrorLoading(false);
            setData(blogs);
        })
        .catch(error => {
            if(error.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
                console.log(error.message);
                setIsLoading(false);
                setErrorLoading(true);
                setData(null);
            }
        });
        return () => abortCont.abort();
    },[url]);
    return {data,isLoading,errorLoading}
}

export default useFetch;


  // const getBlogs = async () => {
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   const res = await fetch(url);
  //   const blogs = await res.json();
  //   setIsLoading(false);
  //   setBlogs(blogs);
  // }