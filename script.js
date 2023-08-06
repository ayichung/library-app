// ui
class Ui {
    static loadList () {
        const library = new Library();
        const list = document.querySelector(".book-list");
        const lib = library.getLibrary();
        for (const i in lib) {
            const book = lib[i];
            const bookElem = Ui.createBookElem(book);
            list.appendChild(bookElem);
        }
    }

    static createBookElem (book) {
        const bookElem = document.createElement("div");
        const title = document.createElement("p")
        const author = document.createElement("p")
        const pages = document.createElement("p")
        const rmBtn = document.createElement("button")

        bookElem.classList.add("book");
        bookElem.setAttribute("id", book.key);
        title.classList.add("title");
        title.textContent = book.title;
        author.textContent = "by " + book.author;
        pages.textContent = book.pages + " pages";
        rmBtn.textContent = "remove";

        bookElem.appendChild(title);
        bookElem.appendChild(author);
        bookElem.appendChild(pages);
        bookElem.appendChild(rmBtn);

        rmBtn.addEventListener("click", () => Ui.removeBook(bookElem));

        return bookElem;
    }

    static clearList () {
        const list = document.querySelector(".book-list");
        list.textContent = null;
    }

    static addBook (e) {
        e.preventDefault();
        const newBook = Ui.getBookInput();
        const library = new Library();
        library.addBookToLibrary(newBook);
        document.querySelector("#add-form").reset();
        Ui.clearList();
        Ui.loadList();
    }

    static getBookInput () {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        return new Book(title, author, pages);
    }

    static removeBook (book) {
        const library = new Library();
        library.removeBookFromLibrary(book.id);
        Ui.clearList();
        Ui.loadList();
    }
}

// library
class Library {
    addBookToLibrary (book) {
        try {  // lib exist
            let lib = JSON.parse(localStorage.getItem('lib'));
            lib.push(book);
            localStorage.setItem('lib', JSON.stringify(lib));
        } catch (error) {  // lib not exist, first time user
            localStorage.setItem('lib', JSON.stringify([book]));
        }
    }
    
    removeBookFromLibrary(key) {
        let lib = JSON.parse(localStorage.getItem('lib'));
        const bookIndex = lib.findIndex((book) => book.key === key);
        lib.splice(bookIndex, 1);
        localStorage.setItem('lib', JSON.stringify(lib));
    }

    getLibrary () {
        return JSON.parse(localStorage.getItem('lib'));
    }
}

// book
class Book {
    constructor (title, author = ' ', pages = ' ') {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.key = new Date();
    }
}

// startup
document.addEventListener('DOMContentLoaded', Ui.loadList);

// listeners
const form = document.querySelector("#add-form");
form.addEventListener("submit", Ui.addBook);
