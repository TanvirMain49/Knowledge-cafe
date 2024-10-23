/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import ShowBook from "../bookmark/Showbooks";

// eslint-disable-next-line react/prop-types
const BookMarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 ml-4 p-6 bg-gray-100 text-left rounded-xl">
            <h2 className="text-lg font-extrabold">Bookmarked Blogs: {bookmarks.length}</h2>
            <div>
            {
                bookmarks.map((bookmark, idx) => <ShowBook key={idx} bookmark={bookmark}></ShowBook>)
            }
            </div>
        </div>
    );
};

export default BookMarks;