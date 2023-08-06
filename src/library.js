export default class Library {
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