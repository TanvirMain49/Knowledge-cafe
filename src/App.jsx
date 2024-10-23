import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks =(blog)=>{
    const newArr = [...bookmarks, blog];
    setBookMarks(newArr);
  }

  const handleReadingTime = (id, time)=>{
    
      setReadingTime(readingTime + Number(time));
      const remainingBooks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookMarks(remainingBooks);

  }
  return (
    <>

      <Header></Header>
      <div className='flex gpa-x-12 max-w-7xl mx-auto'>
      <Blogs handleBookMarks={handleBookMarks} handleReadingTime={handleReadingTime}></Blogs>
      <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>

    </>
  )
}

export default App
