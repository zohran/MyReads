import { Link } from 'react-router-dom';
const BookShelf = ({ title, comparator, bookOnShelf, updateState }) => {


    return (

        <div className="list-books-content">
            <Link to="/"></Link>

            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                bookOnShelf.map(book => {

                                    return (
                                        book.shelf === comparator ? <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div
                                                        className="book-cover"
                                                        style={{
                                                            width: 128,
                                                            height: 193,
                                                            backgroundImage:
                                                                `url(${book.imageLinks.smallThumbnail})`,
                                                        }}
                                                    ></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={e => updateState(e, book)}>
                                                            <option value="none" disabled>
                                                                Move to...
                                                            </option>
                                                            <option value="currentlyReading"  >
                                                                Currently Reading
                                                            </option>
                                                            <option value="wantToRead"  >Want to Read</option>
                                                            <option value="read" >Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.writer}</div>
                                            </div>
                                        </li>
                                    :<></>)
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default BookShelf;