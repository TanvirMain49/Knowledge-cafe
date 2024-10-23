/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMarks, handleReadingTime}) => {

    const[blogs, setBlogs] = useState([]);

    useEffect(()=>{

        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));

    }, [])
    console.log(blogs);
    
    return (
        <div className="md:w-2/3">
            <h2>Blogs length: {blogs.length}</h2>
            {
                blogs.map(blog=> <Blog key={blog.id} blog = {blog} handleBookMarks={handleBookMarks} handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;