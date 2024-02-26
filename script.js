class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}.`);
    }
}

class FictionBook extends Book {
    constructor(title, author, isbn, genre) {
        super(title, author, isbn);
        this.genre = genre;
    }

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Genre: ${this.genre}.`);
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
        console.log('Library Books:');
        this.books.forEach((book) => {
            book.displayInfo();
        });
    }
}

class LibraryMember {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    
    displayBorrowedBooks() {
        console.log(`${this.name}'s Borrowed Books:`);
        this.borrowedBooks.forEach((book) => {
            book.displayInfo();
        });
    }
}

var book1 = new Book('book1', 'author', '1111');
var book2 = new FictionBook('book2', 'author2', '2222', 'fiction');
var book3 = new Book('book3', 'author3', '3333');

book1.displayInfo();
book2.displayInfo();
book3.displayInfo();

var library = new Library();

library.addBook(book1);
library.addBook(book2);

library.displayBooks();

var member = new LibraryMember('Adrian Nicu');
var member2 = new LibraryMember('Cristi');

member.borrowBook(book1);
member.borrowBook(book2);
member.borrowBook(book3);

member2.borrowBook(book1);

member.displayBorrowedBooks();
member2.displayBorrowedBooks();

