// const { title } = require("process");

const form = document.getElementById('form');
// const button = document.getElementById('add-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const container = document.querySelector('.books-li');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = new Date().getTime().toString();

  if (title.value && author.value) {
    const book = document.createElement('div');
    book.className = 'the-book';
    // console.log('title')
    const attribute = document.createAttribute('data-id');
    attribute.value = id;
    book.setAttributeNode(attribute);
    book.innerHTML = ` <ul class="list-unstyled">
       <li class="titles">${title.value}</li>
       <li class="book-author">${author.value}</li>
   </ul>
   <button class="btn-remove">Remove</button>`;

    container.appendChild(book);

    const removeBtn = book.querySelector('.btn-remove');
    removeBtn.addEventListener('click', (e) => {
      e.preventDefault()
    
      const book = e.target.parentElement;
      //   const id = book.dataset;

      container.removeChild(book);
    });
    console.log(removeBtn);
  }
});
