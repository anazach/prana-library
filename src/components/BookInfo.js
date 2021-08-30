import './BookInfo.css'

function BookInfo({ book, close }) {
  return (
    <section className='book-info'>
      <div className='book-info__wrapper'>
        <header>
          <button
            className='back'
            onClick={() => {
              close('')
            }}
          >
            &#8592;
          </button>
        </header>
        <section class='display'>
          <article class='book' style={{ backgroundColor: book.color }}>
            <section class='bg'></section>
            <section class='content'>
              <aside></aside>
              <section class='about'>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
              </section>
            </section>
          </article>
        </section>
        <section className='info'>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>{book.plot}</p>
          <footer>
            <p>
              <b>Audience:</b> {book.audience}
            </p>
            <p>
              <b>First published:</b> {book.year}
            </p>
            <p>
              <b>Pages:</b> {book.pages}
            </p>
            <p>
              <b>Publisher:</b> {book.publisher}
            </p>
          </footer>
        </section>
      </div>
    </section>
  )
}

export default BookInfo
