/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import ShowBook from "../bookmark/Showbooks";

// eslint-disable-next-line react/prop-types
const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-4 p-6 bg-gray-100 text-left rounded-xl">

      <div className="border border-purple-400 bg-purple-300 text-purple-900 font-bold text-xl p-6 mb-5 rounded-lg">
        <h3>Spent time on read : {readingTime} min</h3>
      </div>

      <div>
        <h2 className="text-lg font-extrabold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div>
          {bookmarks.map((bookmark, idx) => (
            <ShowBook
              key={idx}
              bookmark={bookmark}
              readingTime={readingTime}
            ></ShowBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMarks;
