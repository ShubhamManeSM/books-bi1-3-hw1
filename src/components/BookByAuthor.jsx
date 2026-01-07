import useFetch from "../useFetch";

const BookByAuthor = ({ author }) => {
  const { data, loading } = useFetch(
    `https://books-api-six-ruddy.vercel.app/books/author/${author}`
  );

  // console.log(data);

  return (
    data ? (
      <div>
        <h2>Books by {author}</h2>
        <ul>
          {data?.map(book => (
            <li key={book._id}>{book.title}</li>
          ))}
        </ul>
      </div>
    ) : loading && <p>Loading...</p>
  );
};

export default BookByAuthor;
