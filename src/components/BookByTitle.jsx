import useFetch from "../useFetch";

const BookByTitle = ({title}) => {
  const {data, loading} = useFetch(`https://books-api-six-ruddy.vercel.app/books/title/${title}`)

  // console.log(data)

  return(
    data ? <div>
      <h2>{data.title}</h2>
      <p><strong>Author: </strong>{data.author}</p>
      <p><strong>Release Year: </strong>{data.publishedYear}</p>
      <p><strong>Genre: </strong>{data.genre}</p>
    </div> : loading && <p>Loading...</p>
  )
}

export default BookByTitle;