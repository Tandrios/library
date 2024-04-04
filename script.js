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

    const book1 = new Book("Harry Potter", "J.K. Rowling", 658, "No", "Not rated");
    addBooktoLibrary(book1);

    const book2 = new Book("Catcher in the Rye", "J.D. Sallinger", 352, "Yes", 5);
    addBooktoLibrary(book2);

    function listBooks (library) {
        //Remove all existing cards
        const divs = document.getElementsByClassName('card')
        
        for (let i = divs.length - 1; i >= 0; i--) {
            divs[i].parentNode.removeChild(divs[i]);
        }
        // Create cards
        let counter = 0
        for (const book of library) {
            const main = document.querySelector('.main');
            const div = document.createElement('div');
            const btnRemove = document.createElement('button');
            const btnRead = document.createElement('button');

            div.classList.add('card');

            for (const key in book) {
                if (key === "id") {
                    break;
                }

                const bookKey = document.createElement('p');
                const capitalized = key.charAt(0).toUpperCase() + key.slice(1)
                bookKey.textContent = `${capitalized}: ${book[key]}`;
                div.appendChild(bookKey);
            }

            //Set the ID
            div.setAttribute("id", counter);
            book.id = counter;
            counter++;

            // Adding remove button info
            btnRemove.textContent = "Remove"
            btnRemove.addEventListener('click', (e) => {
                btnRemove.parentNode.parentNode.removeChild(div)
                for (const book of library) {
                    if (book.id == btnRemove.parentNode.id) {
                        myLibrary.splice(book, 1)
                    }
                }
            })

            // Adding Read button info
            if (book.read === "Yes") {
                btnRead.textContent = "Not Read"
            } else {
                btnRead.textContent = "Read"
            }

            btnRead.addEventListener('click', () => {
                if (book.read === "Yes") {
                    book.read = "No";
                    btnRead.textContent = "Not Read";
                    listBooks(myLibrary);
                } else {
                    book.read = "Yes";
                    btnRead.textContent = "Read";
                    listBooks(myLibrary);
                }
            })


            div.appendChild(btnRemove);
            div.appendChild(btnRead);
            main.appendChild(div);
        }
    }
    listBooks(myLibrary);

    const dialog = document.querySelector('dialog');
    const showButton = document.querySelector('#add-book-btn');
    const closeButton = document.querySelector('#add-book-btn-confirm');
    
    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // "Add" button closes the dialog and adds data
    closeButton.addEventListener("click", (e) => {
        e.preventDefault();

        const title = document.querySelector('.book-title').value;
        const author = document.querySelector('.book-author').value;
        const pages = document.querySelector('.book-pages').value;
        const read = document.querySelector('.book-read').value;
        const rating = document.querySelector('.book-rating').value;

        const newBook = new Book(title, author, pages, read, rating);
        addBooktoLibrary(newBook);
        listBooks(myLibrary);

        dialog.close();
    });
})



