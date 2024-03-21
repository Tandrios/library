document.addEventListener('DOMContentLoaded', () => {
    
    const myLibrary = [];

    function Book(name, author, pages, read, rating) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.rating = rating;
    }

    function addBooktoLibrary(book) {
        myLibrary.push(book);
    }

    const book1 = new Book("Harry Potter", "J.K. Rowling", 658, "Not Read", "Not rated");
    addBooktoLibrary(book1);

    const book2 = new Book("Catcher in the Rye", "J.D. Sallinger", 352, "Read", 5);
    addBooktoLibrary(book2);

    function listBooks (library) {
        for (const book of library) {
            const main = document.querySelector('.main');
            const div = document.createElement('div');
            div.classList.add('card');

            for (const key in book) {
                const bookKey = document.createElement('p');
                bookKey.textContent = book[key];
                div.appendChild(bookKey);
            }
            main.appendChild(div);
        }
    }
    listBooks(myLibrary);

})