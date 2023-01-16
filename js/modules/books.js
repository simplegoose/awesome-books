export default class AwesomeBooks {
  constructor(dataArray) {
    this.bookArray = dataArray;
  }

  saveToLocalStorage() {
    localStorage.setItem('awesome_books', JSON.stringify(this.bookArray));
  }

  renderBooks(booksList) {
    booksList.innerHTML = '';
    this.bookArray.forEach((book) => {
      const li = document.createElement('li');
      li.className = 'auther_container';
      const autherTitle = document.createElement('p');
      autherTitle.className = 'auther_text';
      autherTitle.innerHTML = `"${book.title}" by ${book.auther}`;

      const delButton = document.createElement('button');
      delButton.className = 'del_button';
      delButton.innerHTML = 'Remove';
      li.appendChild(autherTitle);
      li.appendChild(delButton);
      delButton.addEventListener('click', () => {
        li.remove();
        this.bookArray = this.bookArray
          .filter((item) => !(item.id === book.id));
        this.saveToLocalStorage();
        this.renderBooks();
      });

      booksList.appendChild(li);
    });
  }

  loadLocalStorageData() {
    const localStorageData = JSON.parse(localStorage.getItem('awesome_books'));
    this.bookArray = localStorageData.length ? localStorageData : [];
  }

  addBook(data) {
    this.bookArray.push(data);
  }
}