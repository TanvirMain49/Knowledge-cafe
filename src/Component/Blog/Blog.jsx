/* eslint-disable react/prop-types */
import propTypes from 'prop-types'
import { IoMdBookmark } from "react-icons/io";

const Blog = ({blog, handleBookMarks, handleReadingTime}) => {
    const{imageLink, title, hasTag, authorImageAvatar, authorName, postDate, readingTime} = blog;
    return (
        <div className='mt-6'>
            <img src={imageLink} alt="" className='w-full rounded-lg'/>

            <div className='flex justify-between items-center pt-4'>
                <div className='flex items-center gap-5'>
                    <img src={authorImageAvatar} alt="" className='w-14 h-14 rounded-full object-cover'/>
                    <div>
                        <h3 className='font-bold text-lg'>{authorName}</h3>
                        <p className='text-gray-400'>{postDate}</p>
                    </div>
                </div>

                <div className='flex gap-1 items-center'>
                    <p className='text-base text-gray-400'>{readingTime} min</p>
                    <button onClick={()=>handleBookMarks(blog)} className='text-xl'><IoMdBookmark></IoMdBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl font-bold pt-2'>{title}</h2>

            <div className='flex gap-2 pt-1 pb-3'>
            {
                hasTag.map((tag, idx) => <p key={idx} className='text-base text-gray-400'>#{tag}</p>)
            }
            </div>

            <a onClick={()=>handleReadingTime(readingTime)} className='underline text-purple-400' href="#">Mark as read</a>
        </div>
    );
};
Blog.propTypes = {
    blog: propTypes.object.isRequired
}

export default Blog;