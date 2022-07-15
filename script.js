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
  // take in user input, create book object, add to DOM
}

function removeBookFromLibrary() {

}

function showLibrary() {
    for(let book in myLibrary) {
        console.log(book);
    }

}