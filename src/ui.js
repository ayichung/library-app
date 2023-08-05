import Book from './book.js';
import Library from './library.js';

export default class Ui {
    loadLibrary () {
        // testing setup
        const library = new Library();
        const book = new Book("Circe", "Madeline Miller", 416);
        library.addBookToLibrary(book);

        // here
        const books = library.getLibrary();
        console.log(books);
        // do dom stuff
    }

    // clearLibrary () {

    // }

    // listen for submit btn
        // new book
        // add obj key as dom id
        // add to library
        // loadLib

    // addBook () {

    // }

    // listen for del btn
        // rm from library
        // loadLib

    // removeBook () {

    // }
}

export const { loadLibrary } = new Ui();