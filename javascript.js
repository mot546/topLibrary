class Library{
    
    #myLibrary = [
        {id: 1, title: "Harry Potter", author: "J.K. Rowling", pages: 200, read: false},
        {id: 2, title: "Harry Potter and Shrek", author: "J.K. Roarling", pages: 200, read: true},
        
    ];
    constructor (title, author, pages, read){
        const id = crypto.randomUUID();
        this.newBook = {id, title, author, pages, read};
     
        this.myLibrary.push(newBook);
        this.displayBooks(this.#myLibrary);
    }
}

class DomController extends Library{
    constructor(){
        super();
        this.myLibrary = super.myLibrary;
    }

    submitNewBook(){
    const submitButton = document.querySelector("#submit");
    const dialog = document.getElementById('form-dialog');
    submitButton.addEventListener('click',function(event){
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        let read = document.getElementById('read').value;
        
        read === 'on'? read = false: read =true;
        
        dialog.close();
        document.getElementById('form-inside').reset();
        this.addBookToLibrary(title, author, pages, read)
    });

    }

     displayBooks(myLibrary){
    const cardContainer = document.querySelector(".card-container");
    cardContainer.textContent = '';
    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        const title = document.createElement("p");
        title.classList.add("book-title");
        const author = document.createElement("p");
        author.classList.add("author");
        const pages = document.createElement("p");
        pages.classList.add("pages");
        const readContainer = document.createElement("div");
        readContainer.classList.add("read-container");
        const label = document.createElement("label");
        label.setAttribute("for",'read' )
        const checkbox = document.createElement("input");
        checkbox.setAttribute('type', "checkbox");
        checkbox.id = 'read';
        const removeButton = document.createElement("button");
        removeButton.id = book.id;
        
        removeButton.addEventListener('click', function(event){
            const toDelete = myLibrary.findIndex(book => book.id == event.target.id);
            this.myLibrary.splice(toDelete, 1);
            this.displayBooks(this.myLibrary);
        });
        removeButton.textContent = 'Remove';
        label.textContent = "Finished";
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages + " pages";
        
        checkbox.checked = book.read;
        readContainer.append(checkbox, label);
        card.append(title,author,pages,readContainer,removeButton );
        cardContainer.appendChild(card);
    });

}
}

const dom = new DomController();
dom.displayBooks(Library.#myLibrary);