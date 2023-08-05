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
    
    // removeBookFromLibrary() {
        // try catch
    // }

    getLibrary () {
        return JSON.parse(localStorage.getItem('lib'));
    }
}