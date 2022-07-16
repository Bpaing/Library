let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

Book.prototype.readContent = function () {
    this.read = true;
}

Book.prototype.haveRead = function() {
    return `${this.read ? 'already' : 'not'} read`;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead()}`;
}

function addBookToLibrary() {
  const book = new Book('title', 'author', 125);
  myLibrary.push(book);
}

function removeBookFromLibrary() {
    const book = this.parentElement;
    book.remove();
}

function showLibrary() {
    const library = document.querySelector('.library');
    for(const book of myLibrary) {
        const li = document.createElement('li');
        li.classList.add('book');

        const button = document.createElement('button')
        button.addEventListener('click', removeBookFromLibrary);
        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        h1.classList.add('title');
        h2.classList.add('author');

        img.src = 'close-line.svg';
        h1.textContent = book.title;
        h2.textContent = book.author;
        p.textContent = book.pages;

        button.appendChild(img);
        li.appendChild(button);
        li.appendChild(h1);
        li.appendChild(h2);
        li.appendChild(p);

        library.appendChild(li);
    }
}

addBookToLibrary();
showLibrary();