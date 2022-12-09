// const { title } = require("process");

const form = document.getElementById('form');
// const button = document.getElementById('add-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const container = document.querySelector('.books-li');

function saveLocalStorage(book, id) {
  const bookId = { book, id };
  const arr = localStorage.getItem('pdfs') ? JSON.parse(localStorage.getItem('pdfs')) : [];
  arr.push(bookId);

  localStorage.setItem('pdfs', JSON.stringify(arr));
}

function deleteFromLocalStorage(id) {
  let arr = localStorage.getItem('pdfs') ? JSON.parse(localStorage.getItem('pdfs')) : [];
  // console.log(arr);
  arr = arr.filter((textbk) => {
    if (textbk.id === id) {
      // console.log(textbk.id);
      return textbk;
    }
    return false;
  });
  localStorage.setItem('pdfs', JSON.stringify(arr));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (title.value && author.value) {
    const id = new Date().getTime().toString();
    const book = document.createElement('div');
    book.className = 'the-book';
    //  console.log('title')
    const attribute = document.createAttribute('data-id');
    attribute.value = id;
    book.setAttributeNode(attribute);
    book.innerHTML = ` <ul class="list-unstyled">
       <li class="titles">${title.value}</li>
       <li class="book-author">${author.value}</li>
   </ul>
   <button class="btn-remove">Remove</button>`;
    const pdfs = {};
    pdfs.title = title.value;
    pdfs.author = author.value;

    container.appendChild(book);
    title.value = '';
    author.value = '';

    const removeBtn = book.querySelector('.btn-remove');
    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const book = e.target.parentElement;
      // console.log(book)
      const id = book.dataset;
      container.removeChild(book);
      deleteFromLocalStorage(id);
      //  console.log(id)
    });

    // pdfs.id = id;
    saveLocalStorage(pdfs, id);
  }
});
