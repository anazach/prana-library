import { useState } from 'react'
import './App.css'
import books from './assets/library.json'

import Book from './components/Book'
import BookInfo from './components/BookInfo'

function App() {
  const [currentBook, setCurrentBook] = useState('')

  return (
    <section className="title">
      <h1>Prana Online Library</h1>
      <section className='library'>
        <div className='wrapper'>
          {currentBook ? (
            <BookInfo book={currentBook} close={setCurrentBook} />
          ) : (
            <section className='books'>
              {books.map((book) => {
                return (
                  <Book book={book} chooseBook={setCurrentBook} key={book.id} />
                )
              })}
            </section>
          )}
        </div>
      </section>
    </section>
  )
}

export default App
