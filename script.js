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

Book.prototype.forgetContent = function () {
    this.read = false;
}

Book.prototype.haveRead = function() {
    return `${this.read ? 'already' : 'not'} read`;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead()}`;
}

function changeReadStatus() {
    //toggle html/css appearance
    const div = this.children[0];
    const checkmark = div.children[0];
    checkmark.classList.toggle('unread');

    //negate current read status for array element
    const book = myLibrary[this.dataset.index];
    book.read ? book.forgetContent() : book.readContent();
}

function processForm(e) {
    e.preventDefault();
    console.log('i clicked the button');
}

function createForm() {
    if (document.getElementById('book-form')) { return; }
    const form = document.createElement('form');
    form.setAttribute('id', 'book-form');
    form.innerHTML = 
    `
        <input type="text" id="title" name="title">
        <label for="title">Title: </label>

        <input type="text" id="author" name="author">
        <label for="author">Author: </label>

        <input type="number" id="page-number" name="page_number">
        <label for="page-number">Number of Pages:</label>

        <input type="radio" id="read" name="was_read" value="read">
        <label for="read">Read</label>
        <input type="radio" id="unread" name="was_read" value="unread">
        <label for="read">Not Read</label>
        <button type='submit'>Submit</button>
    `;
    const body = document.querySelector('body');
    const library = document.querySelector('.library');
    body.insertBefore(form, library);
    form.addEventListener('click', processForm);
}

function addBookToLibrary() {
  const book = new Book('title', 'author', 125);
  myLibrary.push(book);
}

function removeBookFromLibrary(e) {
    e.stopPropagation();
    const div = this.parentElement;
    const book = div.parentElement;
    myLibrary.splice(book.dataset.index, 1);
    book.remove();
}

function showLibrary() {
    const library = document.querySelector('.library');
    for(let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const li = document.createElement('li');
        li.classList.add('book');
        li.dataset.index = i;
        li.addEventListener('click', changeReadStatus);

        const div = document.createElement('div');
        const button = document.createElement('button');
        const checkmark = document.createElement('img');
        checkmark.src = 'check-fill.svg';
        checkmark.classList.add(book.read ? '' : 'unread');

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

        div.appendChild(checkmark);
        div.appendChild(button);
        button.appendChild(img);

        li.appendChild(div);
        li.appendChild(h1);
        li.appendChild(h2);
        li.appendChild(p);

        library.appendChild(li);
    }
}

const newBook = document.querySelector('#new-book');
newBook.addEventListener('click', createForm);
addBookToLibrary();
showLibrary();