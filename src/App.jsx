import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([]);

  const handleBookMarks =(blog)=>{
    const newArr = [...bookmarks, blog];
    setBookMarks(newArr);
  }
  return (
    <>

      <Header></Header>
      <div className='flex gpa-x-12 max-w-7xl mx-auto'>
      <Blogs handleBookMarks={handleBookMarks}></Blogs>
      <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>

    </>
  )
}

export default App
