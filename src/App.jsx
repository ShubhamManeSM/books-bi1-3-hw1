import './App.css'
import AddBookForm from './components/AddBookForm'
import BookByAuthor from './components/BookByAuthor'
import BookByTitle from './components/BookByTitle'
import Books from './components/Books'

function App() {
  return (
    <main>
      <AddBookForm />
      <Books />
      <BookByTitle title={"Shoe Dog"} />
      <BookByAuthor author={"Robert Kiyosaki"} />
    </main>
  )
}

export default App
