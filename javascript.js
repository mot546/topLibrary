"use strict";

let myLibrary = [

    {id: 1, title: "Harry Potter", author: "J.K. Rowling", pages: 200, read: false},
    {id: 2, title: "Harry Potter and Shrek", author: "J.K. Roarling", pages: 200, read: true},

];

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const cardContainer = document.querySelector(".card-container")

function displayBooks(myLibrary){
    
    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        const title = document.createElement("p");
        title.classList.add("book-title");
        const author = document.createElement("p");
        author.classList.add("author");
        const pages = document.createElement("p");
        pages.classList.add("pages");
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        
        card.append(title,author,pages);
        cardContainer.appendChild(card);
    });
}

displayBooks(myLibrary);
