/* eslint-disable react/prop-types */
const ShowBook = ({bookmark}) => {
    const{title} = bookmark
    return (
        <div className="bg-white rounded-xl text-center font-bold py-4 my-4">
            <h4>{title}</h4>
        </div>
    );
};

export default ShowBook;