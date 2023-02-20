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
        const newBookRow = document.createElement("tr");
        newBookRow.dataset.index = myLibrary.indexOf(book);
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
        const check = document.createElement("i");
        if (read) {
            check.textContent = "\u{2713}";
            check.classList.add("true");
        } else {
            check.textContent = "\u{2715}";
            check.classList.add("false");
        }
        read.appendChild(check);
        newBookRow.appendChild(read);
        check.addEventListener("click", ()=> {
            const index = check.parentElement.parentElement.dataset.index;
            if(myLibrary[index].read) {
                myLibrary[index].read = false;
                check.textContent = "\u{2715}";
                check.className = "false";
            } else {
                myLibrary[index].read = true;
                check.textContent = "\u{2713}";
                check.className = "true";
            }
        });

        const remove = document.createElement("td");
        const trash = document.createElement("button");
        trash.classList.add("remove");
        trash.textContent = "Remove";
        remove.appendChild(trash);
        newBookRow.appendChild(remove);

        trash.addEventListener("click", ()=> {
            const index = trash.parentElement.parentElement.dataset.index;
            myLibrary.splice(index, 1);
            console.log("poop " + index);
            displayBooks();
        });
    });
};

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
const remove = document.querySelectorAll(".remove");
const table = document.getElementById("body");

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
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    modal.style.display = "none";
})
