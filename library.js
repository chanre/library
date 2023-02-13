let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    bookTable = document.querySelector("#body");
    bookTable.textContent = "";
    myLibrary.forEach((book) => {
        console.log(book);
        const newBookRow = document.createElement("tr");
        newBookRow.classList.add('bookDetails');
        bookTable.appendChild(newBookRow);

        const title = document.createElement("td");
        title.textContent = book.title;
        newBookRow.appendChild(title);
    
        const author = document.createElement("td");
        author.textContent = book.author;
        newBookRow.appendChild(author);

        const pages = document.createElement("td");
        pages.textContent = book.pages;
        newBookRow.appendChild(pages);

        const read = document.createElement("td");
        read.textContent = book.read;
        newBookRow.appendChild(read);

        const remove = document.createElement("td");
        remove.textContent = "\u{1F5D1}";
        newBookRow.appendChild(remove);
    })
}

const book1 = new Book("how to read", "john smith", "100", true);
const book2 = new Book("how to not read", "jane doe", "10", false);
const book3 = new Book("where did all my money go?", "jack jackson", "300", true);
const book4 = new Book("become rich NOW", "gary grifter", "200", true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

const modal = document.getElementById("newBookModal");
const add = document.getElementById("newBook");
const closeButton = document.getElementsByClassName("close")[0];
const submit = document.getElementById("addBook");

add.addEventListener("click", ()=> {
    modal.style.display = "block";
})

closeButton.addEventListener("click", ()=> {
    modal.style.display = "none";
})

submit.addEventListener("click", (e)=> {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let book;
    console.log(read);
    if (read) {
        book = new Book(title, author, pages, "\u{2713}");
    } else {
        book = new Book(title, author, pages, "\u{2715}");
    }
    addBookToLibrary(book);
    modal.style.display = "none";
})


