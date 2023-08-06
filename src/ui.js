import Book from './book.js';
import Library from './library.js';

export default class Ui {
    loadList () {
        // testing setup
        const library = new Library();
        const book = new Book("Circe", "Madeline Miller", 416);
        library.addBookToLibrary(book);
        this.clearList();  // this should go in add/delete methods

        // here, just finished implement load list
        // next, implement add book for storage
        // and then add book from input fields
        // and then delete stuff
        const list = document.querySelector(".book-list");
        const lib = library.getLibrary();
        for (const i in lib) {
            console.log(lib[i]);
            const bookElem = this.createBookElem(book);
            list.appendChild(bookElem);
        }
    }

    createBookElem (book) {
        const bookElem = document.createElement("div");
        const title = document.createElement("p")
        const author = document.createElement("p")
        const pages = document.createElement("p")
        const rmBtn = document.createElement("button")

        bookElem.classList.add("book");
        title.classList.add("title");
        title.textContent = book.title;
        author.textContent = "by " + book.author;
        pages.textContent = book.pages + " pages";
        rmBtn.textContent = "remove";

        bookElem.appendChild(title);
        bookElem.appendChild(author);
        bookElem.appendChild(pages);
        bookElem.appendChild(rmBtn);

        return bookElem;
    }

    clearList () {
        const list = document.querySelector(".book-list");
        list.textContent = null;
    }

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

export const { loadList: loadLibrary } = new Ui();